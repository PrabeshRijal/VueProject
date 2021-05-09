<template>
    <section class="copy-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p> {{copy}} </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data: ()=>({
        copy: 'Copyright © 2020 by CodeSastra Softwares Pvt Ltd. All Rights Reserved'
    })
}
</script>

<style scoped>
.copy-section
{
    background: black;
    overflow: hidden;
    display: flex;
    justify-content: center;
}
.copy-section p
{
    color: rgb(218, 217, 216);
    font-size: 14px;
    padding-top: 12px;
    font-weight: 700;
    text-align: center;
}
</style>