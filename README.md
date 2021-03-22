# 金蝶星空云webapi nodejs SDK

kingdee webapi nodejs sdk.

- 项目地址：[github](https://github.com/CNBlackJ/k3cloudapi)

## Usgae

- `$ npm install k3cloudqpi --save`

- 配置信息

  - 配置相关的基础信息

  - 其中`auth`节点需要金蝶k3cloud管理员进入 `系统管理->第三方系统认证->新增` 生成密钥和填写appid和app名称

```js
{
  baseURL: 'http://erp.kingdee.com',
  accid: 'it dc id', // 数据中心
  lcid: 2052,
  auth: {            // 第三方系统认证
    appid: 'appid',
    appname: 'appid',
    appsecret: 'appsecret'
  },
  apis: {           // webapi
    authPath: '/K3Cloud/Kingdee.BOS.WebApi.ServicesStub.AuthService.LoginByAppSecret.common.kdsvc',
    listPath: '/K3Cloud/Kingdee.BOS.WebApi.ServicesStub.DynamicFormService.ExecuteBillQuery.common.kdsvc',
    getPath: '/K3Cloud/Kingdee.BOS.WebApi.ServicesStub.DynamicFormService.View.common.kdsvc',
    approvalPath: '/K3Cloud/Kingdee.BOS.WebApi.ServicesStub.DynamicFormService.ExcuteOperation.common.kdsvc',
    forwardPath: '/K3Cloud/Kingdee.BOS.WebApi.ServicesStub.DynamicFormService.ExcuteOperation.common.kdsvc',
    addSignPath: '/K3Cloud/Kingdee.BOS.WebApi.ServicesStub.DynamicFormService.ExcuteOperation.common.kdsvc',
    attachmentPath: '/K3Cloud/Kingdee.BOS.WebApi.ServicesStub.DynamicFormService.ExcuteOperation.common.kdsvc',
    mobileBillDetailPath: '/K3Cloud/SZGD.K3.Business.BillPulgin.WebAPI.MobileViewAPI.ExecuteService,SZGD.K3.Business.BillPulgin.common.kdsvc'
  }
}
```

```js
const K3cloudapi = requrie('k3cloudapi')
const config = require('config').kingdee // 配置信息参照上面⬆️

const k3cloudapi = new K3cloudapi(config)

k3cloudapi.auth().then(cookie => {
  // cookie 建议本地缓存 避免每次请求都重新获取
  const formId = 'BD_Empinfo'         // 表单ID
  const fieldKeys = ['FID', 'FName']  // 需要返回的字段
  k3cloudapi.list({ cookie, formId, fieldKeys })
    .then(r => console.log(r)).catch(e => console.log(e))
  k3cloudapi.get({ cookie, formId, id: 143494 })
    .then(r => console.log(r)).catch(e => console.log(e))
})
```

```js
// 支持await
const K3cloudapi = requrie('k3cloudapi')
const config = require('config').kingdee // 配置信息参照上面⬆️

const k3cloudapi = new K3cloudapi(config)
const cookie = await k3cloudapi.auth()
const formId = 'BD_Empinfo'         // 表单ID
const fieldKeys = ['FID', 'FName']  // 需要返回的字段
const results = await k3cloudapi.list({ cookie, formId, fieldKeys })
```

## Contact

- Email: yes.heng@icloud.com
- github: <https://github.com/CNBlackJ>

## Change Log

- 2019-06-25: 添加审批通过/审批驳回/转发/加签/查看附件列表的接口
- 2019-05-27: 添加审核接口
- 2019-05-23: 权限验证/列表/详情接口