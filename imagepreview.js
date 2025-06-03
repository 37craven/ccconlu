document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('imageinput');
    const placeholder = document.querySelector('.imageplaceholder');
    const label = document.getElementById('imageinputlabel');

    if (input && placeholder && label) {
        input.addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    placeholder.style.backgroundImage = `url('${e.target.result}')`;
                    placeholder.style.backgroundSize = 'cover';
                    placeholder.style.backgroundPosition = 'center';
                    label.classList.add('hidden');
                };
                reader.readAsDataURL(file);
            } else {
                placeholder.style.backgroundImage = '';
                label.classList.remove('hidden'); 
            }
        });
    }
});