import { Client , Databases } from "appwrite";

const client = new Client();
client
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('667bc0b800308c325c54');

const databases = new Databases(client);

export {databases, client};
