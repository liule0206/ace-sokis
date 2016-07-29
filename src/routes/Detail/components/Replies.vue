<template>
    <article>
        <div class="rep-title">
            <div class="avatar fl" :style="{'background-image':'url('+avatar_url+')'}"></div>
            <div class="name fl"><span>{{item.author.loginname}}</span></div>
            <div class="fr">
                <div class="date"><span>{{index+1}}楼*{{_howlong}}</span></div>
                <div v-if='_upslength' class="other fr">
                    <li class="praise"></li>
                    <span>{{item.ups.length}}</span>
                </div>
            </div>
        </div>
        <div class="replies">
            {{{item.content}}}
        </div>
    </article>
</template>

<script>

export default {
    props: {
        item: {
            type: Object,
            required: true
        },
        index:{
            type:Number,
            required: true
        }
    },
    data(){
        return {
            avatar_url:"http://gravatar.com/avatar/dbefd0e4d332a8d252c0251075262e8d?s=48"
        }
    },
    computed:{
        _upslength(){
            return this.item.ups.length
        },
        _howlong(){
            let dateCur = new Date();
            let [yearCur,monthCur, dayCur] = [ dateCur.getFullYear(),dateCur.getMonth()+1, dateCur.getDate()];
            let date = this.item.create_at.split('T')[0];
            let [year,month,day] = date.split('-');
            if(year<yearCur){
                return "很久以前";
            }else if(month<monthCur){
                return `${monthCur-month}月以前`;
            }else{
                return `${dayCur-day}天前`
            }
        }
    },
    ready(){
        this.avatar_url = this.item.author.avatar_url 
    }
}
</script>
<style>
    article {
        padding-top: 0.3rem;
    }
    
    article+article {
        border-top: 0.5rem solid #EFEFEF;
    }
    
    .rep-title {
        height: 3rem;
        padding: 0 0.6rem;
    }
    
    .name {
        height: 2rem;
        line-height: 2rem;
        margin-left: 0.8rem;
    }
    
    .markdown-text {
        color: #333;
        font-size: 1.1rem;
    }
    
    .date {
        color: #08c;
    }
    
    .praise {
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
        cursor: pointer;
        opacity: .4;
        display: inline-block;
        color: #000;
    }
    
    .praise:before {
        content: "\f087";
    }
    
    .avatar {
        background-size: 3rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
    }
    
    .fl {
        float: left;
    }
    
    .fr {
        float: right;
    }
    
    .replies {
        padding: 0.5rem;
    }
</style>