#!/bin/bash
# Script to backup the TK Nuryanti database

# Load environment variables from .env file
source .env

# Extract database details from DATABASE_URL
DB_USER=$(echo $DATABASE_URL | sed -n 's/.*:\/\/\([^:]*\):.*/\1/p')
DB_PASS=$(echo $DATABASE_URL | sed -n 's/.*:\/\/[^:]*:\([^@]*\).*/\1/p')
DB_HOST=$(echo $DATABASE_URL | sed -n 's/.*@\([^:]*\):.*/\1/p')
DB_PORT=$(echo $DATABASE_URL | sed -n 's/.*:\([0-9]*\)\/.*/\1/p')
DB_NAME=$(echo $DATABASE_URL | sed -n 's/.*\/\([^?]*\).*/\1/p')

# Create backup directory if it doesn't exist
BACKUP_DIR="./backups"
mkdir -p $BACKUP_DIR

# Create a timestamp for the backup filename
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="$BACKUP_DIR/nuryanti_db_backup_$TIMESTAMP.sql"

# Execute the database backup
echo "Backing up database to $BACKUP_FILE..."
PGPASSWORD=$DB_PASS pg_dump -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -F p > $BACKUP_FILE

# Compress the backup file
gzip $BACKUP_FILE
echo "Backup completed: ${BACKUP_FILE}.gz"

# Remove backups older than 30 days
find $BACKUP_DIR -name "nuryanti_db_backup_*.sql.gz" -type f -mtime +30 -delete
echo "Old backups cleaned up."
