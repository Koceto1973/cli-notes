const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const cliOptions = {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  }
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: cliOptions.title,
    body: cliOptions.body
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: cliOptions.title,
  })
  .command('remove', 'Remove a note', {
    title: cliOptions.title
  })
  .help()
  .argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
    console.log(notes.removeNote(argv.title) ? 'Note was removed' : 'Note not found');
} else {
  console.log('Command not recognized');
}
