<template>
    <div>
        <b-row class="justify-content-md-center mt-3">
            <b-col class="col-md-3 col-12">
                <div class='terminal'>
                    <div class='ribbon'>
                        <div class='circle' ><svg><circle cx="10" cy="10" r="5" fill="red" /></svg></div>
                        <div class='circle' ><svg><circle cx="10" cy="10" r="5" fill="yellow" /></svg></div>
                        <div class='circle' ><svg><circle cx="10" cy="10" r="5" fill="white" /></svg></div>
                    </div>
                    <div class='terminal-content'>
                        <vue-typed-js :strings="[$t('say_hello'), $t('about_me')]" :backDelay="2000" @onStringTyped="doSmth()" :cursorChar="'_'">
                            <p>$ <span class="typing"></span></p>
                        </vue-typed-js>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row class="justify-content-md-center mb-5">
            <b-col class="col-md-8 col-12">
                <b-card :class="this.$store.state.darkMode ? 'bg-dark' : ''"  v-if="terminalAction===1">
                    <b-card-text>
                        <h2>{{$t('hello')}} 👋</h2>
                        <span class="lead">{{$t('thanks_visit')}}</span>
                    </b-card-text>
                </b-card>
                <div class="wrapper"  v-if="terminalAction===2">
                    <div class="top-icons">
                        <i class="fas fa-long-arrow-alt-left"></i>
                        <i class="fas fa-ellipsis-v"></i>
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="profile text-center">
                        <img src="/images/nurkhozin.png" alt="Image" class="thumbnail">
                        <div class="check">
                        <i class="fas fa-check"></i>
                        </div>
                        <h3 class="name str">Nur Khozin</h3>
                        <p class="title str">Software Developer</p>
                        <p class="description blockquote  str" v-html="$t('nur_khozin')"></p>
                        <button type="button" class="btn btn-success">Hire Me</button>
                    </div>
                    <div class="social-icons">
                        mm
                        <!-- <div class="icon">
                        <a href="/">
                            <i class="fab fa-dribbble"></i>
                        </a>
                        <h4>12.8k</h4>
                        <p>Followers</p>
                        </div>
                        <div class="icon">
                        <a href="#">
                            <i class="fab fa-behance"></i>
                        </a>
                        <h4>12.8k</h4>
                        <p>Followers</p>
                        </div>
                        <div class="icon">
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <h4>12.8k</h4>
                        <p>Followers</p>
                        </div> -->
                    </div>
                </div>
                <!-- <b-card :class="this.$store.state.darkMode ? 'bg-dark' : ''" v-if="terminalAction===2" no-body class="overflow-hidden">
                    <b-row no-gutters class="justify-content-md-center">
                        <b-col class="col-md-2 col-3 mt-2">
                            <b-card-img src="/images/nurkhozin.png" alt="Image" class="rounded-circle mx-auto"></b-card-img>
                        </b-col>
                        <b-col class="col-md-12 col-12">
                            <b-card-body >
                            <b-card-text class="text-justify blockquote" v-html="$t('nur_khozin')">
                            </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row> 
                </b-card> -->
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            terminalAction: 0
        }
    },
    methods: {
        async doSmth() {
            this.terminalAction = this.terminalAction+1
        },
    }
}
</script>
<style scoped lang="scss">
$purple-gradient: linear-gradient(45deg, rgba(87,29,146,1) 0%,rgba(172,25,102,1) 100%);
$purple-gradient: linear-gradient(to bottom right, #C90A6D, #FF48A0);
$blue1-gradient: linear-gradient(to bottom right, #5E5AEC, #3F9EFC);
$blue2-gradient: linear-gradient(to bottom right, #6452E9, #639FF9);
$shadow: 0 13px 26px rgba(#000, .2), 0 3px 6px rgba(#000, .2);


.customSlider {
  opacity: 0;
  display: none;
	+ label {
		position: relative;
		top: 35px;
		left: 15px;
		cursor: pointer;
		&:before, &:after {
			background: #FFFFFF;
			position: absolute;
			content: '';
		}
		&:before {
			top: -90px; left: -60px;
			width: 80px;
			height: 40px;
			background: #ccc;
			border-radius: 20px;
			transition: background .75s;
		}
		&:after {
			height: 34px; width: 34px;
			top: -87px; left: -55px;
			border-radius: 50%;
			transition: all .5s;
		}
	}
	
	&:checked + label:after {
		height: 34px; width: 34px;
		top: -87px; left: -19px;
		border-radius: 50%;
	}
	
	&:checked ~ .wrapper {
		color: #fff;
		transition: background .6s ease;
		background: #31394D;
		
		.top-icons {
			i {
				color: #fff;
			}
		}
		
		.profile {
			// &:after {background: #ececece;}
			.name {
				color: #FDFEFF;
			}
			
			.title {
				color: #7C8097;
			} 
			
			.description {
				color: #FDFEFF;
			}
		}
		.icon {
			h4 {
				color: #FFFFFF;
			}
			
			p {
				color: #666B7D;
			}
		}
	}
}

.wrapper {
	transition: background .6s ease;
	border-radius: 10px;
	padding: 20px 20px 20px 20px;
	box-shadow: 0 8px 40px rgba(#000000, .2);
	
	.top-icons {
		i {
			color: #080911;
			&:nth-of-type(1) {
				float: left;
			}
			&:nth-of-type(2) {
				float: right;
			}
			&:nth-of-type(3) {
				float: right;
				padding-right: .8em;
			}
		}
	}
	.profile {
		position: relative;
		
		&:after {
			width: 100%;
			height: 1px;
			content: ' ';
			display: block;
			margin-top: 1.3em;
			background: #E9EFF6;
		}
		
		.check {
			position: absolute;
			right: 5em;
			bottom: 12.7em;
			i {
				color: #fff;
				width: 20px;
				height: 20px;
				font-size: 12px;
				line-height: 20px;
				text-align: center;
				border-radius: 100%;
				background: $purple-gradient;	
			}
		}
		.thumbnail {
			width: 124px;
			height: 124px;
			display: flex;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 1.5em;
			border-radius: 100%;
			box-shadow: $shadow;
		}
		.name {
			font-size: 24px;
			font-weight: 600;
			text-align: center;
		}
		
		.title {
			font-size: .75em;
			font-weight: 300;
			text-align: center;
			padding-top: .5em;
			padding-bottom: .7em;
			letter-spacing: 1.5px;
			text-transform: uppercase;
		}
		
		.description {
			// font-size: 16px;
			font-weight: 300;
			text-align: center;
			margin-bottom: 1.3em;
		}
		
		// .btn {
		// 	color: #fff;
		// 	width: 130px;
		// 	height: 42px;
		// 	outline: none;
		// 	border: none;
		// 	display: block;
		// 	cursor: pointer;
		// 	font-weight: 300;
		// 	margin-left: auto;
		// 	margin-right: auto;
		// 	border-radius: 70px;
		// 	box-shadow: 0 13px 26px rgba(#000, .16), 0 3px 6px rgba(#000, .16);
		// 	background: $purple-gradient;
		// }
	}
	
	// .social-icons {
	// 	display: flex;
	// 	margin-top: 1.2em;
	// 	justify-content: space-between;
		
	// 	.icon {
	// 		display: flex;
	// 		align-items: center;
	// 		flex-direction: column;
	// 		a {
	// 			width: 60px;
	// 			height: 60px;
	// 			font-size: 28px;
	// 			line-height: 60px;
	// 			text-align: center;
	// 			border-radius: 30px;
	// 			box-shadow: $shadow;
	// 		}
	// 		&:nth-of-type(1) {
	// 			a {
	// 				background: $purple-gradient;
	// 			}
	// 		}
	// 		&:nth-of-type(2) {
	// 			a {
	// 				background: $blue1-gradient;
	// 			}
	// 		}
	// 		&:nth-of-type(3) {
	// 			a {
	// 				background: $blue2-gradient;
	// 			}
	// 		}
			
	// 		h4 {
	// 			font-size: 1em;
	// 			margin-top: 1.3em;
	// 			margin-bottom: .2em;
	// 		}
			
	// 		p {
	// 			font-size: 12px;		
	// 		}
	// 	}
	// }
}

.concept {
	position: absolute;
	bottom: 25px;
	color: #AAB0C4;
	font-size: .9em;
	font-weight: 400;
	a {
		color: rgba(172,25,102,1);
		text-decoration: none;
	}
}
.terminal {
	height: 90px;
	border: 1px solid grey;
	border-radius: 5px;
	background-color: transparent;
}

.ribbon {
	height: 30px;
	border: 1px solid grey;
	background-color: grey;
	padding-top: 5px;
	padding-bottom: 5px;
}

.circle {
	float: left;
	width: 20px;
}

.terminal-content {
	width: 100%;
	color: white;
	padding-left: 10px;
	padding-top: 0px;
	float: left;
	margin-top: -110px;
}
</style>