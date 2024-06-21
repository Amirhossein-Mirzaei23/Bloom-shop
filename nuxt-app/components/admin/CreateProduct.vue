<template>
    <div class="bg-slate-100" >
        create
        <FormKit type="form" id="createAddress" @submit="create" :incomplete-message="false" :actions="false">
            <div class="grid grid-cols-3 gap-5 p-5" >
            <div>
                <FormKit type="text" name="title" id="title" label=" عنوان کالا" label-class="form-label"
                input-class="form-control" validation="required"
                :validation-messages="{ required: 'فیلد عنوان الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="number" name="id" id="id" label="شناسه" label-class="form-label"
                input-class="form-control" validation="required"
                :validation-messages="{ required: 'فیلد شناسه الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="text" name="title" id="title" label="عنوان" label-class="form-label"
                input-class="form-control" validation="required"
                :validation-messages="{ required: 'فیلد عنوان الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="text" name="title" id="title" label="عنوان" label-class="form-label"
                input-class="form-control" validation="required"
                :validation-messages="{ required: 'فیلد عنوان الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="text" name="title" id="title" label="عنوان" label-class="form-label"
                input-class="form-control" validation="required"
                :validation-messages="{ required: 'فیلد عنوان الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="text" name="title" id="title" label="عنوان" label-class="form-label"
                input-class="form-control" validation="required"
                :validation-messages="{ required: 'فیلد عنوان الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="text" name="title" id="title" label="عنوان" label-class="form-label"
                input-class="form-control" validation="required"
                :validation-messages="{ required: 'فیلد عنوان الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
            <div>
                <FormKit type="text" name="title" id="title" label="عنوان" label-class="form-label"
                input-class="form-control" validation="required"
                :validation-messages="{ required: 'فیلد عنوان الزامیست' }"
                messages-class="form-text text-danger" />
            </div>
        </div>
        </FormKit>
    </div>
</template>

<script setup>

</script>

<style scoped>
.form-control {
    width: 100%;
    border: none;
    height: 40px;
    margin-bottom: 25px;
    padding-left: 25px;
    border: 1px solid #999;
    outline: none;
    color: #000000;
    border-radius: 5px;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .form-control:focus {
    border-color: #222831;
    box-shadow: 0 0 0 0.25rem rgb(51 52 54 / 25%);
  }
  .form-select:focus {
    border-color: #222831;
    box-shadow: 0 0 0 0.25rem rgb(51 52 54 / 25%);
  }
</style>