
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // student_info用于存储弹框中输入的信息
    student_info:{},
    // isShow用于控制弹窗的显示与否 默认显示弹窗
    isShow:true
  },
  //实时获取弹窗的输入的值
  bindKeyInput(e) {
    console.log(e.detail.value)
  },

  // 隐藏弹窗函数
  hideCover(){
    this.setData({
      isShow: false
    })
  },

  // 展示弹窗函数
  showCover(){
    this.setData({
      isShow:true
    })
  },
  // 点击确定后的事件处理 获取确认后的用户信息 并作出相应的处理
  formSubmit: function (e) {
    console.log(e.detail.value)
    // 获取输入的姓名
    let name = e.detail.value.name;
    // 获取输入的学号
    let ID = e.detail.value.ID;
    // 获取输入的学院
    let college = e.detail.value.college;
    // 获取输入的专业班级
    let major = e.detail.value.major;
    // console.log(name+ID+college+major);
    this.setData({
      student_info:{name:name,ID:ID,college:college,major:major}
    })
    // 将student_info保存至本地缓存
    wx.setStorageSync('student_info', this.data.student_info)
    // 隐藏弹窗
    this.hideCover()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})