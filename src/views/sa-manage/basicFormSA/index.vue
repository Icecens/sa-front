<template>
  <!-- hidden PageHeaderWrapper title demo -->
  <page-header-wrapper :title="false" :content="$t('将您的态势文件上传、导入系统')">
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-form @submit="handleSubmit" :form="form">

        <a-form-item
          :label="$t('态势名称')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-input
            v-decorator="[
              'name',
              {rules: [{ required: true, message: $t('态势名称不能为空') }]}
            ]"
            name="name"
            :placeholder="$t('请输入态势名称')" />
        </a-form-item>

        <a-form-item
          :label="$t('态势类型')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-input
            v-decorator="[
              'type',
              {rules: [{ required: true, message: $t('态势类型不能为空') }]}
            ]"
            name="type"
            :placeholder="$t('请输入态势类型')" />
        </a-form-item>

        <a-form-item
          :label="$t('态势描述')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">
          <a-textarea
            rows="4"
            :placeholder="$t('请输入态势描述')"
            v-decorator="[
              'description',
              {rules: [{ required: true, message: $t('态势描述不能为空') }]}
            ]" />
        </a-form-item>

        <a-form-item
          :label="$t('态势文件上传')"
          :labelCol="{lg: {span: 7}, sm: {span: 7}}"
          :wrapperCol="{lg: {span: 10}, sm: {span: 17} }">

          <a-upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :default-file-list="defaultFileList"
          >
            <a-button> <a-icon type="upload" /> 选择文件 </a-button>
          </a-upload>

          <!--          <a-upload-->
          <!--            v-model="fileList"-->
          <!--            name="file"-->
          <!--            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"-->
          <!--            :headers="headers"-->
          <!--            @change="handleChange"-->
          <!--          >-->
          <!--            <a-button>-->
          <!--              <upload-outlined></upload-outlined>-->
          <!--              选择文件-->
          <!--            </a-button>-->
          <!--          </a-upload>-->

        </a-form-item>

        <!--        <a-form-item-->
        <!--          :wrapperCol="{ span: 24 }"-->
        <!--          style="text-align: center"-->
        <!--        >-->
        <!--          <a-button htmlType="submit" type="primary">{{ $t('form.basic-form.form.submit') }}</a-button>-->
        <!--          <a-button style="margin-left: 8px">{{ $t('form.basic-form.form.save') }}</a-button>-->
        <!--        </a-form-item>-->

      </a-form>
    </a-card>
  </page-header-wrapper>
</template>

<script>
// import { message } from 'ant-design-vue'
// import { ref } from 'vue'

export default {
  name: 'BaseFormSA',
  data () {
    return {
      defaultFileList: [
        {
          uid: '1',
          name: 'xxx.png',
          status: 'done',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/xxx.png'
        },
        {
          uid: '2',
          name: 'yyy.png',
          status: 'done',
          url: 'http://www.baidu.com/yyy.png'
        },
        {
          uid: '3',
          name: 'zzz.png',
          status: 'error',
          response: 'Server Error 500', // custom error message to show
          url: 'http://www.baidu.com/zzz.png'
        }
      ],

      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleChange ({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList)
      }
    },

    // handler
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
