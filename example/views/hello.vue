<template>
  <div>
    <h-table :columns="columns1" :data="data3" border notSetWidth>
    </h-table>
    <h-select
      filterable
      v-model="curItemLevel"
      :clearable='false'
      setDefSelect
      ref="select1"
      style="width:100px"
      @on-change="changeItemLevel">
      <h-option
        v-for="(item) in itemLevelList"
        :value="item['val']"
        :key="item['val']">{{ item['caption'] }}
      </h-option>
    </h-select>
    <h-button type="primary" @click="changeDict">切换下拉框数据</h-button>
    <h-button type="primary" @click="selectSecondOne">选中第二项</h-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curItemLevel: "1",
      itemLevelList: [],
      data1: [{val: "1", caption: "Dict1_11" }, {val: "2", caption: "Dict1_222" },],
      data2: [{val: "1", caption: "Dict1_11" }, {val: "2", caption: "Dict1_222" }, {val: "3", caption: "Dict1_333" },],
      columns1: [
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: '姓名11111',
          key: 'name'
        },
        {
          title: '年龄111111111111111111111',
          key: 'age'
        },
        {
          title: '地址11111111111',
          key: 'address'
        }
      ],
      data3:[ {
          name: '王小明111111111111111111111111111111111',
          age: 18,
          address: '北京市朝阳\r区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        }],    
    }
  },
  methods:{
    changeDict() {
      if (this.itemLevelList == this.data1) {
        this.itemLevelList = this.data2
      } else {
        this.itemLevelList = this.data1
      }
    },
    selectSecondOne() {
      this.curItemLevel = "2"
    },
    changeItemLevel() {}
  },
  created() {
    this.itemLevelList = this.data1;
  }
}
</script>
<!--<template>
<div>
 <h-button type="primary" @click="ttt">Toggle</h-button>
    <h-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" closeRuleChangeValidate>
        <h-form-item label="姓名" prop="name">
            <h-input v-model="formValidate.name" placeholder="请输入姓名"></h-input>
        </h-form-item>
        <h-form-item label="邮箱" prop="mail">
            <h-input v-model="formValidate.mail" placeholder="请输入邮箱"></h-input>
        </h-form-item> 
        <h-form-item label="城市" prop="city">
            <h-select v-model="formValidate.city" placeholder="请选择所在地">
                <h-option value="beijing">北京市</h-option>
                <h-option value="shanghai">上海市</h-option>
                <h-option value="shenzhen">深圳市</h-option>
            </h-select>
        </h-form-item>
        <h-form-item label="选择日期">
            <h-row>
                <h-col span="11">
                    <h-form-item prop="date">
                        <h-date-picker type="date" placeholder="选择日期" v-model="formValidate.date"></h-date-picker>
                    </h-form-item>
                </h-col>
                <h-col span="2" style="text-align: center">-</h-col>
                <h-col span="11">
                    <h-form-item prop="time">
                        <h-time-picker type="time" placeholder="选择时间" v-model="formValidate.time"></h-time-picker>
                    </h-form-item>
                </h-col>
            </h-row>
        </h-form-item>
        <h-form-item label="性别" prop="gender">
            <h-radio-group v-model="formValidate.gender">
                <h-radio label="male">男</h-radio>
                <h-radio label="female">女</h-radio>
            </h-radio-group>
        </h-form-item>
        <h-form-item label="爱好" prop="interest">
            <h-checkbox-group v-model="formValidate.interest">
                <h-checkbox label="吃饭"></h-checkbox>
                <h-checkbox label="睡觉"></h-checkbox>
                <h-checkbox label="跑步"></h-checkbox>
                <h-checkbox label="看电影"></h-checkbox>
            </h-checkbox-group>
        </h-form-item>
        <h-form-item label="介绍" prop="desc">
            <h-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></h-input>
        </h-form-item>
        <h-form-item>
            <h-button type="primary" @click="handleSubmit('formValidate')">提交</h-button>
            <h-button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</h-button>
        </h-form-item>
    </h-form>
</div>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate111: {
                    name: [
                        { required: false, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: false, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    city: [
                        { required: false, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: false, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: false, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: false, message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: false, message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: false, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                    ]
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                    ]
                }
            }
        },
        {
          type: "selection",
          align: "center",
          key: "select",
          width: 200,
          fixed: "left"
        },
        {
          title: "年龄",
          key: "tradeDate",
          width: 200
        },
        {
          title: "地址",
          width: 200,
          key: "securityCode",
          fixed: "right"
        },
        {
          title: "地址1",
          key: "securityName",
          width: 220
        }
      ],
      columns2: [
        {
          type: "index",
          align: "center",
          width: 200,
          fixed: "left"
        },
        {
          type: "selection",
          align: "center",
          key: "select",
          width: 200,
          fixed: "left"
        },
        {
          title: "年龄",
          key: "tradeDate",
          width: 200
        },
        {
          title: "地址",
          width: 200,
          key: "securityCode",
          fixed: "right"
        },
        {
          title: "地址1",
          key: "securityName",
          width: 200
        }
      ],
      columns3: [
        {
          type: "index",
          align: "center",
          width: 200,
          fixed: "left"
        },
        {
          type: "selection",
          align: "center",
          key: "select",
          width: 200,
          fixed: "left"
        },
        {
          title: "年龄",
          key: "tradeDate",
          width: 200
        },
        {
          title: "地址",
          width: 200,
          key: "securityCode",
          fixed: "right"
        },
        {
          title: "地址1",
          key: "securityName",
          width: 170
        }
      ],
      columns4: [
        {
          type: "index",
          align: "center",
          width: 200,
          fixed: "left"
        },
        {
          type: "selection",
          align: "center",
          key: "select",
          width: 200,
          fixed: "left"
        },
        {
          title: "年龄",
          key: "tradeDate",
          width: 200,
          fixed: "right"
        },
        {
          title: "地址",
          // width: 200,
          key: "securityCode"
        },
        {
          title: "地址1",
          key: "securityName",
          // width: 178
        }
      ],
      data1: tData.slice(0, 50),
      data2: tData.slice(0, 5),
      data3: []
    };
  },
  methods: {}
};
</script>

