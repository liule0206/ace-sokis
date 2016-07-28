<template>
  <div class="v-my-pro">
    <div class="con">
      <h1 class="title">
        <template v-if='info.top || info.good'>
          <span v-show='info.top' class="put_top">置顶</span>
          <span v-show='info.good' class="put_good">精华</span>
        </template>
        <span>{{info.title}}</span>
      </h1>
      <div class="change">
        <template v-if='info'>
          <span v-if="info.create_at">{{ _postDate }}</span>
          <span v-if="info.author">{{info.author.loginname}}</span>
          <span v-show='info.tab == "ask"'>发表在问答</span>
          <span v-show='info.tab == "share"'>发表在分享</span>
          <span v-show='info.tab == "job"'>发表在招聘</span>
          <span>被浏览{{info.visit_count}}次</span>
        </template>
      </div>
      <div class="content">
        {{{info.content}}}
      </div>
    </div>
    <div v-if="info.reply_count" class="reply">
      <div class="cont">
        <span> {{ info.reply_count }} 回复</span>
      </div>
      <v-rep v-for='item in _replies' :item='item' :index="$index" transition="fade"></v-rep>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vRep from './Replies' 

export default {
		methods:{
			...mapActions(['showDetail'])
		},
    computed: {
      _postDate(){
        return getPostDdte(this.info.create_at)
      },
      _replies(){
        return this.info.replies
      },
      _repliesLength(){
        return this.info.replies.length
      },
      ...mapGetters(['info'])
    },
    route:{
      data(transition){
        this.showDetail(transition.to.params.id)
      }
    },
    components: {
      vRep
    },
}

function getPostDdte(date){
  return date?"":date.split("T")[0]
}
</script>
<style>
  .con {
    padding: 0.5rem;
  }
  
  .title {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
  
  .change {
    font-size: 0.9rem;
  }
  
  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
  }
  
  h1 {
    font-size: 1rem;
  }
  
  .put_good,
  .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  
  .reply {
    margin-top: 1.5rem;
  }
  
  .cont {
    background-color: #F6F6F6;
    height: 2rem;
    line-height: 2rem;
    padding-left: 0.2rem;
  }
</style>