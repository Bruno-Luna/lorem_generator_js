let textarea = document.querySelector("textarea")
const btn_generate = document.querySelector("#generate")
const btn_copy = document.querySelector("#copy")
const btn_clear = document.querySelector("#clear")
const label = document.querySelector('label')

const positionToastColorGreen = 'position_toast green'
const positionToastColorOrange = 'position_toast orange'

const lorem_text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta sint dolores aliquam impedit laborum suscipit quo accusantium ratione quos totam maiores quas, dolore similique. Ducimus officia quo ipsa incidunt est!\n`

btn_generate.onclick = () => {
  textarea.textContent += lorem_text
  textarea.focus()
  M.toast({html: 'Lorem Ipsum gerado', inDuration: 2800, classes: `${positionToastColorGreen}` })
}

btn_copy.onclick = () => {
  const temConteudoNoTextarea = textarea.value.length > 0
  
  if(temConteudoNoTextarea){
    copiar()
    M.toast({html: 'Conteúdo copiado!', inDuration: 2800, classes: `${positionToastColorGreen}`})
  }else M.toast({html: 'Nada para ser copiado!', inDuration: 2800, classes: `${positionToastColorOrange}`})
  
}

const copiar = () => {
  textarea.select()
  textarea.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(textarea.value);
}

btn_clear.onclick = () => {
  const temConteudoNoTextarea = textarea.value.length > 0
  
  if(temConteudoNoTextarea){
    textarea.textContent = ''
    M.toast({html: 'Campo limpado!', inDuration: 2800, classes: `${positionToastColorGreen}`})
    label.classList.remove('active')
  } else M.toast({html: 'Campo já está vazio!', inDuration: 2800, classes: `${positionToastColorOrange}`})

}
