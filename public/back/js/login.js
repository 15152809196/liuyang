$(function () {
//使用表单校验插件
$(form).bootstrapValidator({
  //1. 指定不校验的类型，默认为[':disabled', ':hidden', ':not(:visible)'],可以不设置
  excluded: [':disabled', ':hidden', ':not(:visible)'],

  //2. 指定校验时的图标显示，默认是bootstrap风格
  feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
    
  },

  //3. 指定校验字段
  fields: {
    //校验用户名，对应name表单的name属性
    username: {
      validators: {
        //不能为空
        notEmpty: {
          message: '用户名不能为空'
        },
        //长度校验
        stringLength: {
          min: 2,
          max: 6,
          message: '用户名长度必须在2到6之间'
        },
        //正则校验
        regexp: {
          regexp: /^[a-zA-Z0-9_\.]+$/,
          message: '用户名由数字字母下划线和.组成'
        }
      }
    },
    password: {
      //不能为空
     validators: {
       notEmpty:     {
         message:'密码不能为空'
       },
       stringLength: {
         min:6,
         max:12,
         message:'密码长度必须为6-12位'
       }
     }
   
    }
  }
});

$("form").on('success.form.bv')


})
