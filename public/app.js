Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})


// app.data === data
// because of proxy

var app = new Vue({
  el: '#app',
  created: function () {
    // `this` points to the vm instance
    console.log(this.todos, "TODOS on create")
  },
  beforeCreate: function(){
    console.log(this.todos, "TODOS B4 create")
  },
  data: {
    message: 'Hello Vue!',
    hoverOver: 'DOING STUFF?',
    seen: false,
    newTodo: "",
    isActive: true,
    hasError: true,
    todos: [
      { text: "Clean Room" },
      { text: "Do homework" },
      { text: "Learn Vue" }
    ]
  },
  computed: {
    reversedMessage: function(){
      return this.message.split('').reverse().join('')
    },
    now: function() {
      return new Date()
    }
  },
  methods: {
    toggleSeen: function(){
      return app.seen = !app.seen
      console.log("Hello")
    },
    addTodo: function(){
      this.todos.push({ text: this.newTodo })
      this.newTodo = ""
      // console.log(this.newTodo)
    }
  }
})

// $watch is an instance method (not data)
// () will run when app.todos changes
app.$watch('todos', function(){
  console.log("TODOS CHANGED");
})
