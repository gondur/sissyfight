config = {};

config['avatar'] = {};
var xoffset = 40;

// which school-specific art to load?
var SCHOOL_ASSETS_TAG = 'angel'; // TODO: change this based on school


config['assetPath'] = '../client/assets/';

config['preloadManifest'] = [
	{
		id: 	'preload_bg',
		src:	'loading/loading_main.png'
	},
	{
		id:		'preload_tapping',
		src:	'loading/tapping.png',
		data:	{
			sheet: {
				frames: {width:50, height:54},
				animations: {'tap': {frames: [0,0,0,0,1,2,3,4,5,6,7], frequency:2 }}
			}
			
		}
	}
]

config['manifest'] = [
	// avatar
	{
		id: 	'faces',
		src:	'avatar/all_faces.png',
		data:	{colors:'skin', grid:[40,50], reg:[-20+xoffset,-14]}
	},
	{
		id: 	'bodies',
		src:	'avatar/all_bods.png',
		data:	{colors:'skin', grid:[81,116], reg:[0+xoffset,9]}
	},
	{
		id:		'hairs',
		src:	'avatar/all_hairs.png',
		data:	{colors:'hair', grid:[65,70], reg:[-1+xoffset,0]}
	},
	{
		id:		'uniforms',
		src:	'avatar/all_uniforms.png',
		data:	{colors:'uniforms', grid:[81,116], reg:[0+xoffset,9]}
	},
	
	
	// dressing room
	{ 	id: 	'dressing_behind', 	src: 'dressing/dressing_behind.png' },
	{ 	id: 	'dressing_frame', 	src: 'dressing/dressing_frame.png' },
	{
		id: 	'dressing_items', 	src: 'dressing/dressing_items.png',
		data: {
			pieces: {
				btn_ok: 			[39,2,  36,23,  0, 0,0], 
				btn_ok_disabled:	[39,29, 36,23,  0, 0,0], 
				btn_ok_pressed:		[39,2,  36,23,  0, -1,-1],
				ptr_skincolor: 		[79,2,  40,45,  0, 9,12], 
				ptr_haircolor:		[86,50, 26,26,  0, -8,10], 
				ptr_addon:			[0, 54, 75,22,  0, 8,6], 
				ptr_addon_disabled:	[0, 85, 75,8,   0, 0,0], 
				lever: 				[20, 1, 19,47,  0, 1,0], 
				lever_pulled:		[0,  1, 19,47,  0, 1,0],
				btn_scroll_up:		[79,80, 21,18,  0, 0,0],
				btn_scroll_up_pressed:		[79,80, 21,18,  0, -1,-1],
				btn_scroll_down:	[101,80,21,18,  0, 0,0],
				btn_scroll_down_pressed:	[101,80,21,18,  0, -1,-1]
			}
		}
	},
	 
	// homeroom 
	{	id:		'homeroom_bg',		src: 'homeroom/homeroom_bg.png'},
	{	id:		'homeroom_items',	src: 'homeroom/homeroom_items.png',
		data:	{
			pieces: {
				btn_dressingroom:			[2, 2,	85,31,	0, 0,0],
				btn_dressingroom_pressed:	[2, 2,	85,31,	0, -1,-1],
				btn_chat:					[89,2,  47,27,  0, 0,0],
				btn_chat_pressed:			[89,2,  47,27,  0, -1,-1]
			}
		}
	},
	{	id:		'homeroom_listing_items', src: 'homeroom/homeroom_listing_items.png',
		data:	{
			pieces:	{
				label_full:			[1, 2,  30, 7,  0,  -18,-10],
				label_fighting:		[40,2,  62, 7,  0,   -4,-10],
				btn_join:			[1,13,  51, 21, 0,  -13,-1],
				btn_join_pressed:	[53,13, 51, 21, 0,  -13,-1],
				btn_join_locked:	[40,35, 64, 21, 0,   0,-1]
			}
		}
	},
	
	// game room
	{	id:		'gameroom_bgitems',	src: 'game/' + SCHOOL_ASSETS_TAG + '/game_bgitems.png', 
		data:	{
			pieces: {
				gameroom_bg:		[0, 0, 528, 276,   0,  0, 0],
				bubble:				[4,23,  85, 78,    0,  0, 0],
				shadow:				[23,203, 47,12,    0,  0, 0]
			}
		}
	},
	{	id:		'gameroom_items', src: 'game/game_items.png',
		data:	{
			pieces: {
				btn_exitgame:		[0, 37, 79,17, 	0, 0, 0],
				btn_exitgame_pressed:[0, 19, 79,17, 	0, 0, 0],
				btn_help:			[82, 19, 42, 39, 0, 0, 0],
				btn_help_pressed:	[82, 19, 42, 39, 0, -1,-1],
				btn_chat:			[535, 47, 47, 27, 0, 0, 0],
				btn_chat_pressed:	[535, 47, 47, 27, 0, -1,-1]
				
			}
		}
	},
	{	id:		'player_items',	src: 'game/player_items.png',
		data:	{
			pieces: {
				heart_10:			[0, 0,  21, 54,   0,   0, 0],
				heart_9:			[22, 0,  21, 54,   0,   0, 0],
				heart_8:			[44, 0,  21, 54,   0,   0, 0],
				heart_7:			[66, 0,  21, 54,   0,   0, 0],
				heart_6:			[88, 0,  21, 54,   0,   0, 0],
				heart_5:			[110, 0,  21, 54,   0,   0, 0],
				heart_4:			[132, 0,  21, 54,   0,   0, 0],
				heart_3:			[154, 0,  21, 54,   0,   0, 0],
				heart_2:			[176, 0,  21, 54,   0,   0, 0],
				heart_1:			[198, 0,  21, 54,   0,   0, 0],
				heart_0:			[220, 0,  21, 54,   0,   0, 0],
				
				status_undecided:	[0,  56,  12, 18,  0,  0, 0],
				status_decided:		[12, 56,  12, 18,  0,  0, 0],
				
			}
		}
	}
	

		
];


config['colors'] = {
	skin:	{
		base: 1,
		vars: [ 
				[[204,153,102], [153,102,51],  [102,51,0],   [0,0,0]],
				[[255,153,102], [204,102,51],  [153,51,0],   [102,0,0]],
				[[255,206,156], [206,156,99],  [156,99,49],  [99,49,0]],
				[[255,255,153], [204,204,102], [153,153,51], [102,102,0]],
				[[204,204,153], [153,153,102], [102,102,51], [51,51,0]],
				[[207,200,96],  [159,152,48],  [96, 96, 0],  [48,48,0]],
				'grayscale'
			]
	},
	
	hair:	{
		base: 0,
		vars: [
				[[204,204,153], [153,153,102], [102,102,51],  [22,27,0]],	// light brown
				[[255,255,204], [204,204,153], [153,153,102], [51,51,0]],	// blonde
				[[102,102,153], [51,51,102],   [0,0,51],      [0,0,0]],		// dark blue-purple
				[[246,150,121], [237,28,36],   [157,10,14],   [121,0,0]],	// scarlet
				[[204,153,153], [153,102,102], [102,51,51],   [51,0,0]],	// pink-brown
				[[124,197,118], [57,180,74],   [25,122,48],   [0,94,32]],	// bright green
				[[153,204,204], [102,153,153], [51,102,102],  [0,51,51]],	// light blue
				[[240,110,169], [236,0,140],   [158,0,93],    [123,0,70]],	// bright magenta
				'grayscale'
			]
	},
	
	uniforms: {
		base: 0,
		vars: [
				[[156,255,255],  [49,156,156], [0,99,99],  [0,49,49]],
				[[255,206,255], [156,99,156], [99,49,99], [49,0,49]],
				[[206,206,255], [99,99,156],  [49,49,99], [0,0,49]],
				[[156,255,156], [49,156,49],  [0,99,0],   [0,49,0]],
				[[255,255,156], [156,156,49], [99,99,0],  [49,49,0]],
				[[255,206,156], [156,99,49],  [99,49,0],  [49,0,0]],
				'grayscale'
			]	
	}

};

// handy shortcuts for number of options of various parameters 
config.number = {};
config.number.of = {
	face: 			8,
	skincolor: 		6, 	// can't trust config.colors.skin.vars.length now that we have the extra grayscale
	hairstyle: 		13,
	haircolor: 		8, 	// ditto config.colors.hair.vars.length,
	uniform: 		5,
	uniformcolor: 	6,	// ditto config.colors.uniforms.vars.length
	expression:		7,
	pose:			9
}

config.avatar['addonsDims'] = {width:81, height:115, regX:40, regY:9}; // they're all the same size

config.avatar['cryOffset'] = 19; // head items drop down this far in cry pose

config.avatar['numAvatarLayers'] = 10;
config.avatar['numPoses'] = 9;
config.avatar['numExpressions'] = 7;

config.avatar['MAX_ADDONS'] = 3;

config.dressing = {};
config.dressing.uniformNames = ['Skirt+Blouse', 'Sweater', 'Jacket', 'Tracksuit', 'Pants'];
config.dressing.addons = {
	COL_WIDTH: 70, 
	ROW_HEIGHT: 10,
	NUM_COLS: 2,
	TALL_PX: 213, // height in pixels of scroll window
	stripe_color: '#52EC7E',
	hole_color: '#222'
}


