package com.kalyan.cucumber.utils;

import java.io.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

/**
 * Created by kgogin1 on 9/26/17.
 */
public class UnzipFile {
    public void unzipFunction(String destinationFolder, String zipFile){
        File directory = new File(destinationFolder);
        if(!directory.exists())
            directory.mkdirs();
        byte[] buffer = new byte[2048];

        try{
            FileInputStream fInput = new FileInputStream(zipFile);
            ZipInputStream zipInput = new ZipInputStream(fInput);
            ZipEntry entry = zipInput.getNextEntry();
            // iterates over entries in the zip file
            while (entry != null) {
                String filePath = destinationFolder + File.separator + entry.getName();
                if (!entry.isDirectory()) {
                    // if the entry is a file, extracts it
                    extractFile(zipInput, filePath);
                } else {
                    // if the entry is a directory, make the directory
                    File dir = new File(filePath);
                    dir.mkdir();
                }
                zipInput.closeEntry();
                entry = zipInput.getNextEntry();
            }
            zipInput.close();
        }catch (Exception e){
            e.printStackTrace();
        }


    }
    private void extractFile(ZipInputStream zipIn, String filePath) throws IOException {
        BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(filePath));
        byte[] bytesIn = new byte[4096];
        int read = 0;
        while ((read = zipIn.read(bytesIn)) != -1) {
            bos.write(bytesIn, 0, read);
        }
        bos.close();
    }

    public static void main(String[] args){
        String curentDir = System.getProperty("user.dir");
        String file = curentDir+"/src/test/resources/featurefile/feature.zip";
        String dest = curentDir+"/target/test-classes/featurefile";
        UnzipFile unzipFile = new UnzipFile();
        unzipFile.unzipFunction(dest,file);
    }
}
