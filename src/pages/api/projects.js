import { Client , Databases, Query } from "appwrite";

export async function getAllProjects() {

    const client = new Client();
    client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('667bc0b800308c325c54');

    const databases = new Databases(client);

    let promise = databases.listDocuments(
        "667bda7d00130e6f9c7e",
        "667bda87002fcd7e6844",
        [
        ]
    );

    var projects = [];
    
    promise.then(function (response) {
        console.log(response.documents.length);

        response.documents.forEach((doc) => {
            projects.push({"title": doc.title, "description": doc.description});
        })
        console.log(projects);
        return projects;
    }, function (error) {
        console.log("failed");
    });

    console.log('size here' + projects.length)
    return projects;

}