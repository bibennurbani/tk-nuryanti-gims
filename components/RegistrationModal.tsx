'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { registerStudent } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const response = await registerStudent(formData);

    setIsLoading(false);

    if (response.success) {
      toast({
        title: 'Pendaftaran Berhasil',
        description: 'Terima kasih telah mendaftar. Kami akan segera menghubungi Anda.',
      });

      // Open WhatsApp with pre-filled message
      if (response.whatsappUrl) {
        window.open(response.whatsappUrl, '_blank');
      }

      onClose();
    } else {
      toast({
        title: 'Pendaftaran Gagal',
        description: 'Terjadi kesalahan saat mendaftar. Silakan coba lagi.',
        variant: 'destructive',
      });
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Pendaftaran Siswa Baru</DialogTitle>
          <DialogDescription>
            Silakan isi formulir di bawah ini untuk mendaftarkan anak Anda.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className='space-y-4'>
          <div>
            <Label htmlFor='childName'>Nama Anak</Label>
            <Input id='childName' name='childName' required />
          </div>
          <div>
            <Label htmlFor='parentName'>Nama Orang Tua</Label>
            <Input id='parentName' name='parentName' required />
          </div>
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' name='email' type='email' required />
          </div>
          <div>
            <Label htmlFor='phone'>Nomor Telepon</Label>
            <Input id='phone' name='phone' type='tel' required />
          </div>
          <div>
            <Label htmlFor='address'>Alamat</Label>
            <Textarea id='address' name='address' required />
          </div>
          <Button type='submit' className='w-full' disabled={isLoading}>
            {isLoading ? 'Mengirim...' : 'Kirim Pendaftaran'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
