<template>
    <section class="error-section">
        <div class="error-container">
            <div class="container" id="error-component">
                <div class="row">
                    <div class="col-md-12">
                        <h1>ERROR!!!!!!!</h1>
                        <div class="danger-image">
                            <img src="~@/assets/images/danger.png" alt="">
                        </div>
                        <h1>Please Do Not Manupulate The URL...</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.error-section
{
    overflow: hidden;
    position: relative;
    margin-top: -150px;
}
#error-component
{
    background: #fff;
    box-shadow: 0 0 10px 0 #363232;
    border-radius: 10px;
    margin-bottom: 50px;
}
.danger-image
{
    display: flex;
    justify-content: center;
    align-items: center;
}
.danger-image img
{
    height: auto;
    width: 30%;
    padding: 25px;
}
.error-section h1
{
    color: rgb(230, 25, 25);
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin: 10px;
}
</style>