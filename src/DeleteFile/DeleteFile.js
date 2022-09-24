import { deleteObject, ref } from 'firebase/storage';
import { storage } from '../firebase.init';

const DeleteFile = (filePath) => {
    const imageRef = ref(storage, filePath);
    return deleteObject(imageRef);
};

export default DeleteFile;