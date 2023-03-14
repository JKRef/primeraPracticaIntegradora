const deleteProductForm = document.getElementById('deleteProduct');

deleteProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('del_id').value;

    fetch(`/api/products/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => window.location.href = '/')
});