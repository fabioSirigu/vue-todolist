/* Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */
/* import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
 */

const { createApp } = Vue

createApp ({
      data(){
            return {
                  error: false,
                  newTask:{
                        text:'',
                        done: false
                  },
                  tasks: [{
                              text: 'Learn HTML',
                              done: true
                        },
                        {
                              text: 'Learn CSS',
                              done: false
                        },
                        {
                              text: 'Learn BOOTRSTRAP',
                              done: true
                        },
                        {
                              text: 'Learn JS',
                              done: false
                        },
                        {
                              text: 'Learn VUEJS',
                              done: true
                        },
            ]
            }
      },
      methods: {
            addTask(){
                  if(this.newTask.text.length < 5){
                        this.error = true
                  } else {
                        this.error = false
                        this.tasks.unshift(this.newTask)
                        
                        this.newTask = {
                              text:'',
                              done: false
                        }
                  }
            },
            submit(){
                  this.addTask()
            },
            done(index){
                  this.tasks.splice(index, 1)
            },
            changeDone(index){
                  if(this.tasks[index].done === true){
                        console.log('ciao true');
                        this.tasks[index].done = false
                  } else {
                        console.log('ciao');
                        this.tasks[index].done = true

                  }
            }

      }
}).mount('#app')