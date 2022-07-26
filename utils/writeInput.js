const fs = require('fs');

// TODO: Create a function to write README file
const writeFile = fileContent => {

    return new Promise ((resolve, reject) => {

        fs.writeFile('./generated-README.md', fileContent, err  => {
    
            if (err) {
    
                reject(err);

                return;
    
            }
    
            resolve({

                ok: true,

                message: 'Your README is now available!'
                
            });

        });

    });


};


module.exports = {writeFile};