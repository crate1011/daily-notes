/*
    Define a variable named `notes` and assign a value of an empty array
*/

//below I've created an object nested inside of an array.
const notes = [
    {
        id: 1,
        text: "they're taking the hobbits to Isengaurd",
        author: "Tolkien",
        date: 1954,
        topics: ["fantasy"]
    }
];
//here I'm using the .push() method to add more objects into my array
notes.push({
    id: 2,
    text: "The world is indeed comic, but the joke is on mankind.",
    author: "H.P. Lovecraft",
    date: 1928,
    topics: ["horror", "fantasy"]
})

notes.push({
    id: 3,
    text: "My good opinion once lost is lost forever.",
    author: "Jane Austen",
    date: 1813,
    topics: ["literature"]
     
})
/*I've created an empty array variable so that when my for if loop iterates through
all of the data it will select any objects with the key word of my criteria variable.
//filteredNotes.push(note) sends them to filteredNotes
*/
const filteredNotes = []
//creates an array and sets it tp empty
const criteria = "fantasy"
//set a variable equal to the value im looking for

//this nested for loop iterates though for every not of notes and allows me to select specific data from my array
//the if statement checks if the topic is the same as criteria and adds it to filterdnotes
for (const note of notes) {
    for (const topic of note.topics) {
        if (topic === criteria) {
            filteredNotes.push(note)


        }
        console.log(topic)
    }
    console.log(note.text)
    
}
//this will console log anything that was in my filtered notes
console.log('***notes about fantasy***')
console.log(filteredNotes)

//made a new loop to iterate through my array again and return anythng under the text keyword and surround it with html elements.
console.log("***  Note Articles  ***")
for (const note of notes) {
    console.log(`<article>\n${note.text}`)
    for (const note of notes) {
        console.log(`<section>${note.topics}</section>`)
    } console.log('</arcticle')
}

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/