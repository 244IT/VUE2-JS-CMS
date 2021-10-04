const HANDLE_CREATE = "create"; // 新增操作
const HANDLE_EDIT = "edit"; // 编辑操作

export const handleContentMixin = {
  methods: {
    /* 点击重置 */
    onReset() {
      this.$refs.pageContentRef.getListData();
    },
    /* 点击搜索 */
    onSearch(formData) {
      this.$refs.pageContentRef.getListData(formData);
    },
    /* 创建用户 */
    onCreate() {
      this.$refs.pageModalRef.showDialog = true;
      this.handleType = HANDLE_CREATE;
      this.defaultInfo = {};
    },
    /* 编辑用户 */
    onEdit(formData) {
      this.$refs.pageModalRef.showDialog = true;
      this.handleType = HANDLE_EDIT;
      this.defaultInfo = formData;
    }
  }
}
