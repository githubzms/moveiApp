<template>
    <div>
        <el-table :data="newtabelData" border style="width: 100%">
            <el-table-column fixed prop="userHead" label="日期">
                <template slot-scope="scope">
                    <img :src="scope.row.userHead" alt="" style="width: 50px;height: 50px;">
                </template>
            </el-table-column>
            <el-table-column fixed prop="date" label="日期">
            </el-table-column>
            <el-table-column prop="username" label="用户名">
            </el-table-column>
            <el-table-column prop="email" label="用户邮箱">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
                <template slot-scope="scope">
                    <el-button @click="removeItem(scope.$index,scope.row)" type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background :current-page.sync="currentPage" :page-size="pageSize" layout="prev, pager, next" :total="tableData.length" class="page">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        name: 'user',
        data() {
            return {
                tableData: [],
                currentPage:1,
                pageSize:3
            }
        },
        computed: {
          newtabelData(){
              return this.tableData.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)||[]
          }  
        },
        mounted() {
            this.axios.get('/api2/admin/getuser').then(res => {
                let status = res.data.status;
                if (status == 0) {
                    this.tableData = res.data.data.userlist
                }
            })
        },
        methods: {
            removeItem(index, item) {
                console.log(index, item)
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.axios.post('/api2/admin/removeUser', { email: item.email }).then(res => {
                        let status = res.data.status;
                        if (status == 0) {
                            this.tableData.splice(index,1)
                            this.$message({
                                type: 'success',
                                message: res.data.msg
                            });
                        } else {
                            this.$message({
                                type: 'success',
                                message: res.data.msg
                            });
                        }
                    })


                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        }
    }
</script>
<style scoped>
    .page {
        text-align: left;
        margin-top: 20px;
    }
</style>