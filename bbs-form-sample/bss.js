'use strict';

var storageName = 'dataBBS';
var arrayList   = [];

var Main = {
  data: function() {
    return {
      labelPosition : 'right',
      labelWidth : '100px',
      formData : {
        name     : '',
        email    : '',
        title    : '',
        message  : '',
        password : ''
      },
      rules: {
        name: [
          {required: true, message: 'name is required'}
        ],
        title: [
          {required: true, message: 'title is required'}
        ],
        message: [
          {required: true, message: 'message is required'}
        ],
        password: [
          {required: true, password: 'title is required'}
        ]
      }
    };
  },
  methods: {
    submitForm: function(formName) {
      var scope = this;
      this.$refs[formName].validate(function(valid) {
        if (valid) {
          scope.pushForm();
        } else {
          alert('error submit!!');
          return false;
        }
      });
    },
    resetForm: function(formName) {
      this.$refs[formName].resetFields();
    },
    pushForm: function() {
      arrayList.push({
        'name'     : this.formData.name,
        'email'    : this.formData.email,
        'title'    : this.formData.title,
        'message'  : this.formData.message,
        'password' : this.formData.password
      });
      localStorage.setItem(storageName, JSON.stringify(arrayList));
    }
  }
};
var vueForm = Vue.extend(Main);
new vueForm().$mount('#app');

arrayList = localStorage.getItem(storageName);
arrayList = JSON.parse(arrayList);
if (arrayList === null) arrayList = [];

var messageList = new Vue({
  el : '#message-box',
  data: {
    arrayItems : arrayList
  }
});
















