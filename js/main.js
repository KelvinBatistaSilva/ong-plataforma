
// Acessibilidade: evitar foco preso
document.addEventListener('keydown', (e)=>{
  if(e.key==='/' && !e.target.closest('input,textarea')){
    const search = document.querySelector('#site-search'); if(search){ e.preventDefault(); search.focus(); }
  }
});

// Máscaras simples (progressive enhancement)
function applyMask(el, formatter){
  el.addEventListener('input', ()=>{
    const start = el.selectionStart;
    const unmasked = el.value.replace(/\D/g,'');
    el.value = formatter(unmasked);
    try{ el.setSelectionRange(start, start);}catch{}
  });
}

function maskCPF(v){
  return v.replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
          .slice(0,14);
}

function maskPhone(v){
  if(v.length <= 10){
    return v.replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
            .slice(0,14);
  }else{
    return v.replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .slice(0,15);
  }
}

function maskCEP(v){
  return v.replace(/(\d{5})(\d)/, '$1-$2').slice(0,9);
}

document.addEventListener('DOMContentLoaded', ()=>{
  const cpf = document.querySelector('#cpf');
  const tel = document.querySelector('#telefone');
  const cep = document.querySelector('#cep');
  if(cpf) applyMask(cpf, maskCPF);
  if(tel) applyMask(tel, maskPhone);
  if(cep) applyMask(cep, maskCEP);

  // Simples validação visual
  document.querySelectorAll('input[required]').forEach((inp)=>{
    inp.addEventListener('invalid', ()=>{
      const msg = inp.parentElement.querySelector('.error-msg');
      if(msg){ msg.textContent = inp.title || 'Campo obrigatório ou formato inválido.'; }
    });
    inp.addEventListener('input', ()=>{
      const msg = inp.parentElement.querySelector('.error-msg');
      if(msg){ msg.textContent = ''; }
    });
  });
});
