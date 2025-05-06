import { useState } from 'react';
import Swal from 'sweetalert2';

function TodoItem({ todo, setTodos }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);

    const toggleCompleted = () => {
        setTodos(prev => prev.map(t =>
            t.id === todo.id ? { ...t, completed: !t.completed } : t
        ));
    };

    const deleteTodo = () => {
        Swal.fire({
            title: 'Yakin ingin menghapus?',
            text: 'Tindakan ini tidak bisa dibatalkan!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                setTodos(prev => prev.filter(t => t.id !== todo.id));
                Swal.fire('Dihapus!', 'Todo telah dihapus.', 'success');
            }
        });
    }

    const saveEdit = () => {
        setTodos(prev => prev.map(t =>
            t.id === todo.id ? { ...t, text: editText } : t
        ));

        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Todo berhasil diubah!',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
        });
    };

    return (
        <li className="flex items-center gap-5">
            {isEditing ? (
                <>
                    <input value={editText} onChange={(e) => setEditText(e.target.value)} className="basis-3/4 p-1 rounded border-2 border-solid border-[#E0E0E0]" />
                    <button onClick={saveEdit} className="mx-auto bg-[#4CAF50] text-white py-1 px-2 rounded border-2 border-solid border-[#4CAF50] hover:bg-[#388E3C] hover:border-[#388E3C] basis-1/4">Simpan</button>
                </>
            ) : (
                <>
                    <span onClick={toggleCompleted} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className="basis-3/4 hover:cursor-pointer">{todo.text}</span>
                    <div className="basis-1/4 flex items-center justify-center gap-2">
                        <button onClick={() => setIsEditing(true)} className="basis-1/2 bg-[#2196F3] text-white py-1 px-2 rounded hover:bg-[#1976D2]">Edit</button>
                        <button onClick={deleteTodo} className="basis-1/2 bg-[#F44336] text-white py-1 px-2 rounded hover:bg-[#B71C1C]">Hapus</button>
                    </div>
                </>
            )}
        </li>
    );
}

export default TodoItem;