/******/
import iostream
import os
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()
DEFAULT_FILE_STORAGE='files.custom_storage.PrivageMediaStorage'
STATICFILES_STORAGE='storages.backends.s3boto3.S3StaticStorage'
AWS_S3_REGION_NAME = 'us-east-2'

DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.postgresql_psycopg2',
    'NAME': DB_NAME,
    'USER': DB_USER,
    'PASSWORD': DB_PASSWORD,
    'HOST': DB_HOST,
    'PORT': DB_PORT,
    'OPTIONS': {
      'connect_timeout': 5
    }
  }
}

print("Connection Details:", DATABASES)