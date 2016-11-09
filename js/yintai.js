window.onload =function(){
	// 顶部导航
	var top=$('.top')[0];
	var hidden_con=$('.con',top);
	var hidden_empty=$('.hidden-empty',top)
	var con_hidden_top=$('.con-hidden-top',top);
	var img_hidden=$('.img-hidden',top);
	var zhuan=$('.zhuan')
	for(var i=0;i<hidden_con.length;i++){
		hidden_con[i].index=i;
		hidden_con[i].onmouseover=function(){
			con_hidden_top[this.index].style.display='block';
			hidden_empty[this.index].style.display='block';
			img_hidden[this.index].style.display='block';
			zhuan[this.index].style.transform='rotate(180deg)'
		}
		hidden_con[i].onmouseout=function(){
			hidden_empty[this.index].style.display='none'
			con_hidden_top[this.index].style.display='none';
			img_hidden[this.index].style.display='none';
			zhuan[this.index].style.transform='rotate(0deg)'
		}
	}
	// banner轮播
	function bannerLunbo(obj){
		var obj=obj
		var img=$('.banner-pic',obj);
		var pic=$('.bg',obj);
		var lis=$('.circle',obj);
		var left=$('.aLeft',obj)[0];
		var right=$('.aRight',obj)[0];
		var banner=$('.banner-bottom',obj)[0];
		var n=0;
		var t=setInterval(move,3000);
		function move(){
			n++;
			if(n>=img.length-1){
				n=0;
			}
			for(var i=0;i<img.length;i++){
				animate(img[i],{opacity:0},1000)
				animate(pic[i],{opacity:0},1000)
				lis[i].style.background='#3E3E3E'
			}
			animate(img[n],{opacity:1},1000)
			animate(pic[n],{opacity:1},1000)
			lis[n].style.background='#B61B1F'
		}
		banner.onmouseover=function(){
			clearInterval(t);
			right.style.display='block';
			left.style.display='block';
		}
		banner.onmouseout=function(){
			t=setInterval(move,3000);
			right.style.display='none';
			left.style.display='none';
		}
		right.onclick=function(){
			move();
		}
		left.onclick=function(){
			n--;
			if(n<=0){
				n=img.length-1;
			}
			for(var i=0;i<img.length;i++){
				animate(img[i],{opacity:0},1000)
				animate(pic[i],{opacity:0},1000)
				lis[i].style.background='#3E3E3E'
			}
			animate(img[n],{opacity:1},1000)
			animate(pic[n],{opacity:1},1000)
			lis[n].style.background='#B61B1F'
		}
		for(var i=0;i<lis.length;i++){
			lis[i].index=i;
			lis[i].onclick=function(){
				if(this.index>n){
					n++;
					if(n>=img.length){
						n=0;
					}
					for(var i=0;i<img.length;i++){
						animate(img[i],{opacity:0},1000);
						animate(pic[i],{opacity:0},1000);
						lis[i].style.background='#3E3E3E';
					}
					animate(img[this.index],{opacity:1},1000);
					animate(pic[this.index],{opacity:1},1000);
					lis[this.index].style.background='#B61B1F';
					n=this.index;
				}else if(this.index<n){
					n--;
					if(n<=0){
						n=img.length-1;
					}
					for(var i=0;i<img.length;i++){
						animate(img[i],{opacity:0},1000);
						lis[i].style.background='#3E3E3E';
					}
					animate(img[this.index],{opacity:1},1000);
					lis[this.index].style.background='#B61B1F';
					n=this.index;
				}
			}
		}
	}
	bannerLunbo($('.banner')[0])
	// banner右边图片
	var banner_left=$('.banner-left')[0];
	banner_left.onmouseover=function(){
		animate(banner_left,{left:990},600)
	}
	banner_left.onmouseout=function(){
		animate(banner_left,{left:1000},600)
	}
	// 楼层轮播及大图透明度
	var lunbo=function(obj){
		var fashion=obj;
		var bottomBox=$('.pic1',fashion)[0];
		var bottomWidth=parseInt(getStyle(bottomBox,'width'));
		var bottomImg=$('.pic1-first',fashion);
		var bottomLeft=$('.an-left',fashion)[0];console.log(bottomLeft)
		var bottomRight=$('.an-right',fashion)[0];
		var bottomCircle=$('.circles',fashion)[0];
		var bottomLis=$('.circles-lis',fashion);console.log(bottomLis)
		var n2=0;
		var next=0;
		bottomBox.onmouseover=function(){
			bottomLeft.style.display='block';
			bottomRight.style.display='block';
			bottomBox.style.opacity=0.8;
		}
		bottomBox.onmouseout=function(){
			bottomLeft.style.display='none';
			bottomRight.style.display='none';
			bottomBox.style.opacity=1;
		}
		bottomLeft.onclick=function(){
			next=n2-1;
			if(next<0){
				return;
			}
			bottomImg[next].style.left=-bottomWidth+'px';
			animate(bottomImg[n2],{left:bottomWidth},600,Tween.Quad.easeInOut);
			animate(bottomImg[next],{left:0},600,Tween.Quad.easeInOut,function(){flag=true});
			bottomLis[n2].style.background="#211616";
			bottomLis[next].style.background='#E00853';
			n2=next;
		}
		bottomRight.onclick=function(){
			next=n2+1;
			if(next>bottomImg.length-1){
				return;
			}
			bottomImg[next].style.left=bottomWidth+'px';
			animate(bottomImg[n2],{left:-bottomWidth},600,Tween.Quad.easeInOut);
			animate(bottomImg[next],{left:0},600,Tween.Quad.easeInOut);
			bottomLis[n2].style.background="#211616";
			bottomLis[next].style.background='#E00853';
			n2=next;
		}
		for(var i=0;i<bottomLis.length;i++){
			bottomLis[i].index=i;
			bottomLis[i].onclick=function(){
				if(this.index<n2){
					bottomImg[this.index].style.left=-bottomWidth+'px';
					animate(bottomImg[n2],{left:bottomWidth},600,Tween.Quad.easeInOut);	
				}else if(this.index>n2){
					bottomImg[this.index].style.left=bottomWidth+'px';
					animate(bottomImg[n2],{left:-bottomWidth},600,Tween.Quad.easeInOut);
				}
				animate(bottomImg[this.index],{left:0},600,Tween.Quad.easeInOut);
				bottomLis[n2].style.background="#211616";
				bottomLis[this.index].style.background='#E00853';
				n2=this.index;
				next2=this.index;
			}
		}
	}
	lunbo($('.fashion')[0]);
	lunbo($('.shoe')[0]);
	lunbo($('.cases')[0]);
	lunbo($('.hairdressing')[0]);
	lunbo($('.exercise')[0]);
	lunbo($('.Acc')[0]);
	// 楼层中的大图
	function opacity(obj){
		var pic1=$('.pic1',obj);
		for(var i=0;i<pic1.length;i++){
			pic1[i].index=i;
			pic1[i].onmouseover=function(){
				pic1[this.index].style.opacity=0.8;
			}
			pic1[i].onmouseout=function(){
				pic1[this.index].style.opacity=1;
			}
		}
	}
	opacity($('.trend')[0])
	opacity($('.boutique')[0])
	opacity($('.TongYing')[0])
	// 楼层跳转
		var fixed=$('.fixed')[0];
		var floor=$('.floor')
		var fixed_lis=$('.fixed-lis');
		var imgs=$('.imgs');
		var text=$('.text');
		var back=$('.back')[0];
		var back_imgs=$('.back-imgs')[0];
		var back_text=$('.back-text')[0];
		var now;
		var cHeight=document.documentElement.clientHeight;
		var top=document.body.scrollTop?document.body:document.documentElement;
		for(var i=0;i<floor.length;i++){
			floor[i].h=floor[i].offsetTop;
		}
		window.onscroll=function(){
			var nHeight=fixed.offsetHeight;
			if(top.scrollTop>=floor[0].h-200){
				fixed.style.display='block';
				fixed.style.top=(cHeight-nHeight)/2+'px';
			}else{
				fixed.style.display='none';
			}
			for(var i=0;i<floor.length;i++){

				if(top.scrollTop>=floor[i].h){
					for(var j=0;j<fixed_lis.length;j++){
						imgs[j].style.display='block';
						text[j].style.display='none';
					}
					text[i].style.display='block';
					imgs[i].style.display='none';
					now=i;
				}
				
			}
		}
		for(var i=0;i<fixed_lis.length;i++){
			fixed_lis[i].index=i;
			fixed_lis[i].onclick=function(){
				animate(document.body,{scrollTop:floor[this.index].h});
				animate(document.documentElement,{scrollTop:floor[this.index].h});
				text[this.index].style.display='block';
				imgs[this.index].style.display='none';
				now=this.index;
			}
			fixed_lis[i].onmouseover=function(){
				text[this.index].style.display='block';
				imgs[this.index].style.display='none';
			}
			fixed_lis[i].onmouseout=function(){
				if(this.index==now){
					return;
				}
				imgs[this.index].style.display='block';
				text[this.index].style.display='none';
			}
		}
		back.onmouseover=function(){
			back_text.style.display='block';
			back_imgs.style.display='none';
		}
		back.onmouseout=function(){
			back_text.style.display='none';
			back_imgs.style.display='block';
		}
		back.onclick=function(){
			animate(document.body,{scrollTop:0});
			animate(document.documentElement,{scrollTop:0});
			back_text.style.display='block';
			back_imgs.style.display='none';
		}
	

	// banner左边的隐藏导航
	var dh_con=$('.dh-con');
	var right_hidden_con=$('.right-hidden-con');
	for(var i=0;i<dh_con.length;i++){
		dh_con[i].index=i
		hover(dh_con[i],function(){
			right_hidden_con[this.index].style.display='block'
		},function(){
			right_hidden_con[this.index].style.display='none';
		})
	}
	// 图片透明度
	// 专柜同款
	var recommend_img=$('.recommend-img');
	for(var i=0;i<recommend_img.length;i++){
		recommend_img[i].index=i;
		recommend_img[i].onmouseover=function(){
			recommend_img[this.index].style.opacity=0.7;
		}
		recommend_img[i].onmouseout=function(){
			recommend_img[this.index].style.opacity=1;
		}
	}
	// foot
	var foot_img=$('.foot-img');
	for(var i=0;i<foot_img.length;i++){
		foot_img[i].index=i;
		foot_img[i].onmouseover=function(){
			foot_img[this.index].style.opacity=0.7;
		}
		foot_img[i].onmouseout=function(){
			foot_img[this.index].style.opacity=1;
		}
	}
	
	// 选项卡
	function Select(obj){
		var obj=obj;
		var title=$(".select",obj);
		var con=$('.img-box',obj);
		var triangle=$('.triangle',obj);
		for(var i=0;i<title.length;i++){
			title[i].index=i;
			title[i].onmouseover=function(){
				for(var j=0;j<con.length;j++){
					con[j].style.display='none';
					title[j].style.borderBottom='5px solid #333333';
					triangle[j].style.display='none';
				}
				con[this.index].style.display='block';
				triangle[this.index].style.display='block';
				title[this.index].style.borderBottom='5px solid #E5004F'
			}
		}
	}
	Select($(".ad")[0]);
	// 专柜同款选项卡
	function Select2(obj){
		var obj=obj;
		var title=$(".select",obj);
		var con=$('.img-box',obj);
		var triangle=$('.triangle',obj);
		for(var i=0;i<title.length;i++){
			title[i].index=i;
			title[i].onmouseover=function(){
				for(var j=0;j<con.length;j++){
					con[j].style.display='none';
					title[j].style.borderBottom='2px solid #333333';
					triangle[j].style.display='none';
				}
				con[this.index].style.display='block';
				triangle[this.index].style.display='block';
				title[this.index].style.borderBottom='2px solid #E5004F'
			}
		}
	}
	Select2($(".Sears")[0]);
	// 第三部分线条动画
	function Border1(obj){
		var obj=obj;
		var pic=$('.Imgs',obj);
		var bTop=$('.bTop',obj);
		var bLeft=$('.bLeft',obj);
		var bBottom=$('.bBottom',obj);
		var bRight=$('.bRight',obj);
		for(var i=0;i<pic.length;i++){
			pic[i].index=i
			pic[i].onmouseover=function(){
				animate(bTop[this.index],{width:220},500);
				animate(bLeft[this.index],{height:262},500);
				animate(bBottom[this.index],{width:220},500);
				animate(bRight[this.index],{height:262},500)
			}
			pic[i].onmouseout=function(){
				animate(bTop[this.index],{width:0},500);
				animate(bLeft[this.index],{height:0},500);
				animate(bBottom[this.index],{width:0},500);
				animate(bRight[this.index],{height:0},500)
			}
		}	
	}
	Border1($('.img-box')[0])
	Border1($('.img-box')[1])
	// 本周推荐线条
	function Border2(obj){
		var obj=obj;
		var pic=$('.con',obj);
		var bTop=$('.bTop',obj);
		var bLeft=$('.bLeft',obj);
		var bBottom=$('.bBottom',obj);
		var bRight=$('.bRight',obj);
		for(var i=0;i<pic.length;i++){
			pic[i].index=i
			pic[i].onmouseover=function(){
				animate(bTop[this.index],{width:200},500);
				animate(bLeft[this.index],{height:250},500);
				animate(bBottom[this.index],{width:200},500);
				animate(bRight[this.index],{height:250},500)
			}
			pic[i].onmouseout=function(){
				animate(bTop[this.index],{width:0},500);
				animate(bLeft[this.index],{height:0},500);
				animate(bBottom[this.index],{width:0},500);
				animate(bRight[this.index],{height:0},500)
			}
		}	
	}
	Border2($('.img-box')[4])
	// 楼层内线条动画
	function Border3(obj){
		var obj=obj;
		var pic=$('.pic',obj);
		var bTop=$('.bTop',obj);
		var bLeft=$('.bLeft',obj);
		var bBottom=$('.bBottom',obj);
		var bRight=$('.bRight',obj);
		for(var i=0;i<pic.length;i++){
			pic[i].index=i
			pic[i].onmouseover=function(){
				animate(bTop[this.index],{width:270},500);
				animate(bLeft[this.index],{height:180},500);
				animate(bBottom[this.index],{width:270},500);
				animate(bRight[this.index],{height:180},500)
			}
			pic[i].onmouseout=function(){
				animate(bTop[this.index],{width:0},500);
				animate(bLeft[this.index],{height:0},500);
				animate(bBottom[this.index],{width:0},500);
				animate(bRight[this.index],{height:0},500)
			}
		}
		
	}
	for(var i=0;i<$('.floor').length;i++){
		Border3($('.floor')[i]);
	}
	// 左边轮播
	var lunbo2=function(obj){
		var obj=obj;
		var bottomBox=$('.label-imgs-box',obj)[0];
		var bottomWidth=parseInt(getStyle(bottomBox,'width'));
		var bottomImg=$('.label-imgs',obj);
		var bottomLeft=$('.arrows-left',obj)[0];
		var bottomRight=$('.arrows-right',obj)[0];
		var n2=0;
		var next=0;
		bottomLeft.onclick=function(){
			next=n2-1;
			if(next<0){
				return;
			}
			bottomImg[next].style.left=-bottomWidth+'px';
			animate(bottomImg[n2],{left:bottomWidth},600,Tween.Quad.easeInOut);
			animate(bottomImg[next],{left:0},600,Tween.Quad.easeInOut,function(){flag=true});
			n2=next;
		}
		bottomRight.onclick=function(){
			next=n2+1;
			if(next>bottomImg.length-1){
				return;
			}
			bottomImg[next].style.left=bottomWidth+'px';
			animate(bottomImg[n2],{left:-bottomWidth},600,Tween.Quad.easeInOut);
			animate(bottomImg[next],{left:0},600,Tween.Quad.easeInOut);
			n2=next;
		}
	}
	for(var i=0;i<$('.left-bottom').length;i++){
		lunbo2($('.left-bottom')[i])
	}
	
}

