import { useState } from 'react'
import logo from './assets/logo.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

export function App() {
  const [notes, setNotes] = useState([
    { id: 1, date: new Date(), content: "Hello!" },
    { id: 2, date: new Date(), content: "Hello 2!" }
  ])

  function onNoteCreated(content: String){
    const newNote = {
      id: Math.random(),
      date: new Date(),
      content,
    }
  }
  
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt="Logo NLW Expert" />

      <form className='w-full'>
        <input type='text' className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none' placeholder='Busque por uma nota...' />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNoteCard />
        {notes.map(note =>{
          return <NoteCard key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}

 