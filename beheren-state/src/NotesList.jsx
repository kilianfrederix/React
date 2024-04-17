import Note from "./Note";

export default function NotesList(notes) {
    return (
        <div class="list-group">
            {/* voeg "active" class toe voor actieve note */}
            {notes.map(note => (
                <Note
                    key={note.id}
                    note={note}
                />
            ))}
        </div>
    );
}