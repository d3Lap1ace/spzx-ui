<template>
    <div class="app-container">
        <el-form
            :model="queryParams"
            ref="queryRef"
            :inline="true"
            v-show="showSearch"
            label-width="68px"
        >
            <el-form-item label="会员_id" prop="userId">
                <el-input
                    v-model="queryParams.userId"
                    placeholder="请输入会员_id"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="昵称" prop="nickName">
                <el-input
                    v-model="queryParams.nickName"
                    placeholder="请输入昵称"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="订单号" prop="orderNo">
                <el-input
                    v-model="queryParams.orderNo"
                    placeholder="请输入订单号"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="使用的优惠券" prop="couponId">
                <el-input
                    v-model="queryParams.couponId"
                    placeholder="请输入使用的优惠券"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="订单总额" prop="totalAmount">
                <el-input
                    v-model="queryParams.totalAmount"
                    placeholder="请输入订单总额"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="优惠券" prop="couponAmount">
                <el-input
                    v-model="queryParams.couponAmount"
                    placeholder="请输入优惠券"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="原价金额" prop="originalTotalAmount">
                <el-input
                    v-model="queryParams.originalTotalAmount"
                    placeholder="请输入原价金额"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="运费" prop="feightFee">
                <el-input
                    v-model="queryParams.feightFee"
                    placeholder="请输入运费"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="收货人姓名" prop="receiverName">
                <el-input
                    v-model="queryParams.receiverName"
                    placeholder="请输入收货人姓名"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="收货人电话" prop="receiverPhone">
                <el-input
                    v-model="queryParams.receiverPhone"
                    placeholder="请输入收货人电话"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="收货人地址标签" prop="receiverTagName">
                <el-input
                    v-model="queryParams.receiverTagName"
                    placeholder="请输入收货人地址标签"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="省份/直辖市" prop="receiverProvince">
                <el-input
                    v-model="queryParams.receiverProvince"
                    placeholder="请输入省份/直辖市"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="城市" prop="receiverCity">
                <el-input
                    v-model="queryParams.receiverCity"
                    placeholder="请输入城市"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="区" prop="receiverDistrict">
                <el-input
                    v-model="queryParams.receiverDistrict"
                    placeholder="请输入区"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="详细地址" prop="receiverAddress">
                <el-input
                    v-model="queryParams.receiverAddress"
                    placeholder="请输入详细地址"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item label="支付时间" prop="paymentTime">
                <el-date-picker
                    clearable
                    v-model="queryParams.paymentTime"
                    type="date"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择支付时间"
                >
                </el-date-picker>
            </el-form-item>
            <el-form-item label="发货时间" prop="deliveryTime">
                <el-date-picker
                    clearable
                    v-model="queryParams.deliveryTime"
                    type="date"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择发货时间"
                >
                </el-date-picker>
            </el-form-item>
            <el-form-item label="确认收货时间" prop="receiveTime">
                <el-date-picker
                    clearable
                    v-model="queryParams.receiveTime"
                    type="date"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择确认收货时间"
                >
                </el-date-picker>
            </el-form-item>
            <el-form-item label="取消订单时间" prop="cancelTime">
                <el-date-picker
                    clearable
                    v-model="queryParams.cancelTime"
                    type="date"
                    value-format="YYYY-MM-DD"
                    placeholder="请选择取消订单时间"
                >
                </el-date-picker>
            </el-form-item>
            <el-form-item label="取消订单原因" prop="cancelReason">
                <el-input
                    v-model="queryParams.cancelReason"
                    placeholder="请输入取消订单原因"
                    clearable
                    @keyup.enter="handleQuery"
                />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" icon="Search" @click="handleQuery"
                    >搜索</el-button
                >
                <el-button icon="Refresh" @click="resetQuery">重置</el-button>
            </el-form-item>
        </el-form>

        <el-row :gutter="10" class="mb8">
            <el-col :span="1.5">
                <el-button
                    type="primary"
                    plain
                    icon="Plus"
                    @click="handleAdd"
                    v-hasPermi="['user:orderInfo:add']"
                    >新增</el-button
                >
            </el-col>
            <el-col :span="1.5">
                <el-button
                    type="success"
                    plain
                    icon="Edit"
                    :disabled="single"
                    @click="handleUpdate"
                    v-hasPermi="['user:orderInfo:edit']"
                    >修改</el-button
                >
            </el-col>
            <el-col :span="1.5">
                <el-button
                    type="danger"
                    plain
                    icon="Delete"
                    :disabled="multiple"
                    @click="handleDelete"
                    v-hasPermi="['user:orderInfo:remove']"
                    >删除</el-button
                >
            </el-col>
            <el-col :span="1.5">
                <el-button
                    type="warning"
                    plain
                    icon="Download"
                    @click="handleExport"
                    v-hasPermi="['user:orderInfo:export']"
                    >导出</el-button
                >
            </el-col>
            <right-toolbar
                v-model:showSearch="showSearch"
                @queryTable="getList"
            ></right-toolbar>
        </el-row>

        <el-table
            v-loading="loading"
            :data="orderInfoList"
            @selection-change="handleSelectionChange"
        >
            <el-table-column type="selection" width="55" align="center" />
            <el-table-column label="id" align="center" prop="id" />
            <el-table-column label="会员_id" align="center" prop="userId" />
            <el-table-column label="昵称" align="center" prop="nickName" />
            <el-table-column label="订单号" align="center" prop="orderNo" />
            <el-table-column
                label="使用的优惠券"
                align="center"
                prop="couponId"
            />
            <el-table-column
                label="订单总额"
                align="center"
                prop="totalAmount"
            />
            <el-table-column
                label="优惠券"
                align="center"
                prop="couponAmount"
            />
            <el-table-column
                label="原价金额"
                align="center"
                prop="originalTotalAmount"
            />
            <el-table-column label="运费" align="center" prop="feightFee" />
            <el-table-column
                label="订单状态【0->待付款；1->待发货；2->已发货；3->待用户收货，已完成；-1->已取消】"
                align="center"
                prop="orderStatus"
            />
            <el-table-column
                label="收货人姓名"
                align="center"
                prop="receiverName"
            />
            <el-table-column
                label="收货人电话"
                align="center"
                prop="receiverPhone"
            />
            <el-table-column
                label="收货人地址标签"
                align="center"
                prop="receiverTagName"
            />
            <el-table-column
                label="省份/直辖市"
                align="center"
                prop="receiverProvince"
            />
            <el-table-column label="城市" align="center" prop="receiverCity" />
            <el-table-column
                label="区"
                align="center"
                prop="receiverDistrict"
            />
            <el-table-column
                label="详细地址"
                align="center"
                prop="receiverAddress"
            />
            <el-table-column
                label="支付时间"
                align="center"
                prop="paymentTime"
                width="180"
            >
                <template #default="scope">
                    <span>{{
                        parseTime(scope.row.paymentTime, "{y}-{m}-{d}")
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="发货时间"
                align="center"
                prop="deliveryTime"
                width="180"
            >
                <template #default="scope">
                    <span>{{
                        parseTime(scope.row.deliveryTime, "{y}-{m}-{d}")
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="确认收货时间"
                align="center"
                prop="receiveTime"
                width="180"
            >
                <template #default="scope">
                    <span>{{
                        parseTime(scope.row.receiveTime, "{y}-{m}-{d}")
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="取消订单时间"
                align="center"
                prop="cancelTime"
                width="180"
            >
                <template #default="scope">
                    <span>{{
                        parseTime(scope.row.cancelTime, "{y}-{m}-{d}")
                    }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="取消订单原因"
                align="center"
                prop="cancelReason"
            />
            <el-table-column label="订单备注" align="center" prop="remark" />
            <el-table-column
                label="操作"
                align="center"
                class-name="small-padding fixed-width"
            >
                <template #default="scope">
                    <el-button
                        link
                        type="primary"
                        icon="Edit"
                        @click="handleUpdate(scope.row)"
                        v-hasPermi="['user:orderInfo:edit']"
                        >修改</el-button
                    >
                    <el-button
                        link
                        type="primary"
                        icon="Delete"
                        @click="handleDelete(scope.row)"
                        v-hasPermi="['user:orderInfo:remove']"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>

        <pagination
            v-show="total > 0"
            :total="total"
            v-model:page="queryParams.pageNum"
            v-model:limit="queryParams.pageSize"
            @pagination="getList"
        />

        <!-- 添加或修改订单对话框 -->
        <el-dialog :title="title" v-model="open" width="500px" append-to-body>
            <el-form
                ref="orderInfoRef"
                :model="form"
                :rules="rules"
                label-width="80px"
            >
                <el-form-item label="会员_id" prop="userId">
                    <el-input
                        v-model="form.userId"
                        placeholder="请输入会员_id"
                    />
                </el-form-item>
                <el-form-item label="昵称" prop="nickName">
                    <el-input
                        v-model="form.nickName"
                        placeholder="请输入昵称"
                    />
                </el-form-item>
                <el-form-item label="订单号" prop="orderNo">
                    <el-input
                        v-model="form.orderNo"
                        placeholder="请输入订单号"
                    />
                </el-form-item>
                <el-form-item label="使用的优惠券" prop="couponId">
                    <el-input
                        v-model="form.couponId"
                        placeholder="请输入使用的优惠券"
                    />
                </el-form-item>
                <el-form-item label="订单总额" prop="totalAmount">
                    <el-input
                        v-model="form.totalAmount"
                        placeholder="请输入订单总额"
                    />
                </el-form-item>
                <el-form-item label="优惠券" prop="couponAmount">
                    <el-input
                        v-model="form.couponAmount"
                        placeholder="请输入优惠券"
                    />
                </el-form-item>
                <el-form-item label="原价金额" prop="originalTotalAmount">
                    <el-input
                        v-model="form.originalTotalAmount"
                        placeholder="请输入原价金额"
                    />
                </el-form-item>
                <el-form-item label="运费" prop="feightFee">
                    <el-input
                        v-model="form.feightFee"
                        placeholder="请输入运费"
                    />
                </el-form-item>
                <el-form-item label="收货人姓名" prop="receiverName">
                    <el-input
                        v-model="form.receiverName"
                        placeholder="请输入收货人姓名"
                    />
                </el-form-item>
                <el-form-item label="收货人电话" prop="receiverPhone">
                    <el-input
                        v-model="form.receiverPhone"
                        placeholder="请输入收货人电话"
                    />
                </el-form-item>
                <el-form-item label="收货人地址标签" prop="receiverTagName">
                    <el-input
                        v-model="form.receiverTagName"
                        placeholder="请输入收货人地址标签"
                    />
                </el-form-item>
                <el-form-item label="省份/直辖市" prop="receiverProvince">
                    <el-input
                        v-model="form.receiverProvince"
                        placeholder="请输入省份/直辖市"
                    />
                </el-form-item>
                <el-form-item label="城市" prop="receiverCity">
                    <el-input
                        v-model="form.receiverCity"
                        placeholder="请输入城市"
                    />
                </el-form-item>
                <el-form-item label="区" prop="receiverDistrict">
                    <el-input
                        v-model="form.receiverDistrict"
                        placeholder="请输入区"
                    />
                </el-form-item>
                <el-form-item label="详细地址" prop="receiverAddress">
                    <el-input
                        v-model="form.receiverAddress"
                        placeholder="请输入详细地址"
                    />
                </el-form-item>
                <el-form-item label="支付时间" prop="paymentTime">
                    <el-date-picker
                        clearable
                        v-model="form.paymentTime"
                        type="date"
                        value-format="YYYY-MM-DD"
                        placeholder="请选择支付时间"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="发货时间" prop="deliveryTime">
                    <el-date-picker
                        clearable
                        v-model="form.deliveryTime"
                        type="date"
                        value-format="YYYY-MM-DD"
                        placeholder="请选择发货时间"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="确认收货时间" prop="receiveTime">
                    <el-date-picker
                        clearable
                        v-model="form.receiveTime"
                        type="date"
                        value-format="YYYY-MM-DD"
                        placeholder="请选择确认收货时间"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="取消订单时间" prop="cancelTime">
                    <el-date-picker
                        clearable
                        v-model="form.cancelTime"
                        type="date"
                        value-format="YYYY-MM-DD"
                        placeholder="请选择取消订单时间"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="取消订单原因" prop="cancelReason">
                    <el-input
                        v-model="form.cancelReason"
                        placeholder="请输入取消订单原因"
                    />
                </el-form-item>
                <el-form-item label="删除标志" prop="delFlag">
                    <el-input
                        v-model="form.delFlag"
                        placeholder="请输入删除标志"
                    />
                </el-form-item>
                <el-form-item label="订单备注" prop="remark">
                    <el-input
                        v-model="form.remark"
                        type="textarea"
                        placeholder="请输入内容"
                    />
                </el-form-item>
            </el-form>
            <template #footer>
                <div class="dialog-footer">
                    <el-button type="primary" @click="submitForm"
                        >确 定</el-button
                    >
                    <el-button @click="cancel">取 消</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup name="OrderInfo">
import {
    listOrderInfo,
    getOrderInfo,
    delOrderInfo,
    addOrderInfo,
    updateOrderInfo,
} from "@/api/user/orderInfo";

const { proxy } = getCurrentInstance();

const orderInfoList = ref([]);
const open = ref(false);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const single = ref(true);
const multiple = ref(true);
const total = ref(0);
const title = ref("");

const data = reactive({
    form: {},
    queryParams: {
        pageNum: 1,
        pageSize: 10,
        userId: null,
        nickName: null,
        orderNo: null,
        couponId: null,
        totalAmount: null,
        couponAmount: null,
        originalTotalAmount: null,
        feightFee: null,
        orderStatus: null,
        receiverName: null,
        receiverPhone: null,
        receiverTagName: null,
        receiverProvince: null,
        receiverCity: null,
        receiverDistrict: null,
        receiverAddress: null,
        paymentTime: null,
        deliveryTime: null,
        receiveTime: null,
        cancelTime: null,
        cancelReason: null,
    },
    rules: {
        userId: [
            { required: true, message: "会员_id不能为空", trigger: "blur" },
        ],
        orderNo: [
            { required: true, message: "订单号不能为空", trigger: "blur" },
        ],
        totalAmount: [
            { required: true, message: "订单总额不能为空", trigger: "blur" },
        ],
        couponAmount: [
            { required: true, message: "优惠券不能为空", trigger: "blur" },
        ],
        originalTotalAmount: [
            { required: true, message: "原价金额不能为空", trigger: "blur" },
        ],
        feightFee: [
            { required: true, message: "运费不能为空", trigger: "blur" },
        ],
        orderStatus: [
            {
                required: true,
                message:
                    "订单状态【0->待付款；1->待发货；2->已发货；3->待用户收货，已完成；-1->已取消】不能为空",
                trigger: "change",
            },
        ],
        createTime: [
            { required: true, message: "创建时间不能为空", trigger: "blur" },
        ],
        updateTime: [
            { required: true, message: "更新时间不能为空", trigger: "blur" },
        ],
        delFlag: [
            { required: true, message: "删除标志不能为空", trigger: "blur" },
        ],
    },
});

const { queryParams, form, rules } = toRefs(data);

/** 查询订单列表 */
function getList() {
    loading.value = true;
    listOrderInfo(queryParams.value).then((response) => {
        orderInfoList.value = response.rows;
        total.value = response.total;
        loading.value = false;
    });
}

// 取消按钮
function cancel() {
    open.value = false;
    reset();
}

// 表单重置
function reset() {
    form.value = {
        id: null,
        userId: null,
        nickName: null,
        orderNo: null,
        couponId: null,
        totalAmount: null,
        couponAmount: null,
        originalTotalAmount: null,
        feightFee: null,
        orderStatus: null,
        receiverName: null,
        receiverPhone: null,
        receiverTagName: null,
        receiverProvince: null,
        receiverCity: null,
        receiverDistrict: null,
        receiverAddress: null,
        paymentTime: null,
        deliveryTime: null,
        receiveTime: null,
        cancelTime: null,
        cancelReason: null,
        createTime: null,
        createBy: null,
        updateTime: null,
        updateBy: null,
        delFlag: null,
        remark: null,
    };
    proxy.resetForm("orderInfoRef");
}

/** 搜索按钮操作 */
function handleQuery() {
    queryParams.value.pageNum = 1;
    getList();
}

/** 重置按钮操作 */
function resetQuery() {
    proxy.resetForm("queryRef");
    handleQuery();
}

// 多选框选中数据
function handleSelectionChange(selection) {
    ids.value = selection.map((item) => item.id);
    single.value = selection.length != 1;
    multiple.value = !selection.length;
}

/** 新增按钮操作 */
function handleAdd() {
    reset();
    open.value = true;
    title.value = "添加订单";
}

/** 修改按钮操作 */
function handleUpdate(row) {
    reset();
    const _id = row.id || ids.value;
    getOrderInfo(_id).then((response) => {
        form.value = response.data;
        open.value = true;
        title.value = "修改订单";
    });
}

/** 提交按钮 */
function submitForm() {
    proxy.$refs["orderInfoRef"].validate((valid) => {
        if (valid) {
            if (form.value.id != null) {
                updateOrderInfo(form.value).then((response) => {
                    proxy.$modal.msgSuccess("修改成功");
                    open.value = false;
                    getList();
                });
            } else {
                addOrderInfo(form.value).then((response) => {
                    proxy.$modal.msgSuccess("新增成功");
                    open.value = false;
                    getList();
                });
            }
        }
    });
}

/** 删除按钮操作 */
function handleDelete(row) {
    const _ids = row.id || ids.value;
    proxy.$modal
        .confirm('是否确认删除订单编号为"' + _ids + '"的数据项？')
        .then(function () {
            return delOrderInfo(_ids);
        })
        .then(() => {
            getList();
            proxy.$modal.msgSuccess("删除成功");
        })
        .catch(() => {});
}

/** 导出按钮操作 */
function handleExport() {
    proxy.download(
        "user/orderInfo/export",
        {
            ...queryParams.value,
        },
        `orderInfo_${new Date().getTime()}.xlsx`
    );
}

getList();
</script>
