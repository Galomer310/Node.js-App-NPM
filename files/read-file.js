import fs from 'fs/promises';

const read_File = async (filePath) => {
    try {
        return await fs.readFile(filePath, 'utf8');
    } catch (err) {
        console.error('Error details:', err.message); 
        throw new Error("Could not find the file");
    }
};

export default read_File;
