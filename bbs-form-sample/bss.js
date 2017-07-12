/**
 * Created by tasaki_takahiro on 2017/07/12.
 */
'use strict';
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
          alert('submit!');
          scope.pushForm(formName);
        } else {
          alert('error submit!!');
          return false;
        }
      });
    },
    resetForm: function(formName) {
      this.$refs[formName].resetFields();
    },
    pushForm: function(formName) {
      console.log(formName);
    }
  }
};
var vueForm = Vue.extend(Main);
new vueForm().$mount('#app');