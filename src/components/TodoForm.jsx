import { useState } from 'react';
import Swal from 'sweetalert2';

function TodoForm({ setTodos }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        setTodos(prev => [
            ...prev,
            { id: Date.now(), text, completed: false }
        ]);

        Swal.fire({
            icon: 'success',
            title: 'Todo berhasil ditambahkan!',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });

        setText('');
    };

    return (
        <section className="bg-[#F5F5F5] p-5 rounded-md xl:basis-2/3">
            <header className="mb-5 border-b-2 border-black w-fit pb-1">
                <h2 className="font-bold text-lg">Tambah To-Do List</h2>
            </header>

            <form onSubmit={handleSubmit} className="h-fit flex items-center">
                <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Tambah todo' className="mr-5 border-2 border-solid border-[#E0E0E0] p-1 rounded basis-3/4" />
                <button type='submit' className="bg-[#424242] py-1 px-2 rounded text-white font-bold basis-1/4 hover:bg-[#616161] border-2 border-solid border-[#424242] hover:border-[#616161]">Tambah</button>
            </form>
        </section>
    );
}

export default TodoForm;