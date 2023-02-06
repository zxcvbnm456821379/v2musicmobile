<template>
	<div class="fixed">
		<div class="hot">
			<div class="hotopct">
				<div class="icon">

				</div>
				<div class="time">
					更新日期：{{time}}
				</div>
			</div>
		</div>
		
		<div class="hotcont">
			<div class="hotsongw">
				<div class="cred">
					01
				</div>
				<div class="hot-btn">
					<div class="hot-l">
						我记得
					</div>
					<div class="hot-r">
						我记得
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Hotsongs"
	}
</script>

<style scoped>
	.fixed {
		margin-top: 125px;
	}

	.hot {
		position: relative;
		padding-top: 38.9%;
		overflow: hidden;
		background: url(//s3.music.126.net/mobile-new/img/hot_music_bg_2x.jpg?f01a252…=) no-repeat;
		background-size: contain;
	}

	.hotopct {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 2;
		padding-left: 20px;
		box-sizing: border-box;
	}

	.icon {
		width: 142px;
		height: 67px;
		background-position: -30px -30px !important;
		background: url(//s3.music.126.net/mobile-new/img/index_icon_2x.png?5207a28…=) no-repeat;
		background-size: 166px 97px !important;
	}

	.time {
		margin-top: 10px;
		color: hsla(0, 0%, 100%, .8);
		font-size: 12px;
		-webkit-transform: scale(.91);
		-ms-transform: scale(.91);
		transform: scale(.91);
		-webkit-transform-origin: left top;
		-ms-transform-origin: left top;
		transform-origin: left top;
	}
	.hot-btn {
		padding: 6px 0;
		   
	}
	.hot-l {
		overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    word-break: normal;
			font-size: 17px;
	}
	
</style>
