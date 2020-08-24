import fs from 'fs';
import path from 'path';
import upload from '@config/upload';
import IStorageProvider from '../models/IStorageProvider';

export default class DiskStorageProvider implements IStorageProvider {
  async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(upload.tmpFolder, file),
      path.resolve(upload.uploadsFolder, file),
    );

    return file;
  }

  async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(upload.uploadsFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}
