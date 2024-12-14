import fs from "fs";

export const createFile = (folderpath, fileName, contents, cbFn = () => { }) => {
    if (!fs.existsSync(folderpath)) {
        fs.mkdir(folderpath, () =>
            console.log("folder created"));
    }
    fs.writeFile(`${folderpath}/${fileName}`, contents, cbFn);
};

export const getFiles = (folderpath, successFn, errorFn) => {
    fs.readdir(folderpath, (err, data) => {
        if (err) {
            errorFn();
        } else successFn(data);
    });
};
