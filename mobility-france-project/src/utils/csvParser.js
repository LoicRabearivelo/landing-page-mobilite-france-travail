import Papa from 'papaparse';

export const parseCsvFile = async (filePath) => {
    try {
        const response = await fetch(filePath);
        const csvText = await response.text();
        
        return new Promise((resolve, reject) => {
            Papa.parse(csvText, {
                header: true,
                complete: (results) => {
                    resolve(results.data);
                },
                error: (error) => {
                    reject(error);
                }
            });
        });
    } catch (error) {
        console.error('Error reading CSV file:', error);
        throw error;
    }
};