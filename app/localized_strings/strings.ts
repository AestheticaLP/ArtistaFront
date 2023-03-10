// How to use : https://www.npmjs.com/package/react-native-localization
import LocalizedStrings from 'react-native-localization';

// eslint-disable-next-line no-unused-vars
const localizedStringsGlobal = new LocalizedStrings({
	// ENGLISH ------------------------------------------
	en: {
		// ONBOARDING
		welcome: 'Welcome to Artista !',
		onboarding1: 'Share your art easily with Artista',

		// COMMON ACTIONS
		continue: 'Continue',
		allow: 'Allow',
		deny: 'Deny',
		cancel: 'Cancel',
		back: 'Back',

		// ACCOUNT/AUTH
		firstName: 'First name',
		lastName: 'Last name',
		username: 'Username',
		email: 'Email',
		password: 'Password',
		confirmPassword: 'Confirm password',
		acceptTOS: 'I accept the Terms of Service',
		login: 'Login',
		noAccountYet: 'No account yet ?',
		signupExclamation: 'Sign up !',
		artist: 'Artist',
		traveler: 'Traveler',
		institution: 'Institution',

		// CATEGORIES
		tag: 'Tag',
		tags: 'Tags',
		category: 'Category',
		categories: 'Categories',
		categoriesYouMightLike: 'Categories you might like',

		// POSTS
		post: 'Post',
		search: 'Search',
		nSearchResults: '{0} search results',
		title: 'Title',
		description: 'Description',
		relatedPosts: 'Related posts',
		like: 'Like',
		share: 'Share',
		report: 'Report',
		addToCollection: 'Add to Collection',

		// EVENTS
		event: 'Event',
		eventName: 'Event name',
		location: 'Location',
		date: 'Date',
		selectImage: 'Select an image',
		inviteMembers: 'Invite members',
		fromDateAtTime: 'From {0} at {1}',
		toDateAtTime: 'To {0} at {1}',
		participate: 'Participate',
		nParticipants: '{0} participants',

		// USERS
		follow: 'Follow',
		followers: 'Followers',
		following: 'Following',
		about: 'About',
		posts: 'Posts',
		collections: 'Collections',

		// MESSAGING
		newMessage: 'New message',
		messages: 'Messages',
		messaging: 'Messaging',
		send: 'Send',

		// CREATE
		shareCreationsWithCommunity: 'Share your creations with the community !',
		organizeExpoOrGatheringAndInviteUsers: 'Organize an exposition or a gathering and invite members to participate !',
		needToAccessDeviceStorage: "We need to access you device's storage in order for you to add media to your post.",
		content: 'Content',
		addMedia: 'Add media',

		// MEDIA TYPES
		audio: 'Audio',
		image: 'Image',
		video: 'Video',
	},

	// FRENCH ------------------------------------------
	fr: {
		// ONBOARDING
		welcome: 'Bienvenue sur Artista !',
		onboarding1: 'Partagez vos ??uvres facilement avec Artista',

		// COMMON ACTIONS
		continue: 'Continuer',
		allow: 'Autoriser',
		deny: 'Refuser',
		cancel: 'Annuler',
		back: 'Retour',

		// ACCOUNT/AUTH
		firstName: 'Pr??nom',
		lastName: 'Nom',
		username: 'Pseudonyme',
		email: 'Adresse mail',
		password: 'Mot de passe',
		confirmPassword: 'Confirmer le mot de passe',
		acceptTOS: "J'accepte les conditions d'utilisation",
		login: 'Connexion',
		noAccountYet: 'Pas encore de compte ?',
		signupExclamation: 'Inscrivez-vous !',
		artist: 'Artiste',
		traveler: 'Voyageur',
		institution: 'Institution',

		// CATEGORIES
		tag: 'Cat??gorie',
		tags: 'Cat??gories',
		category: 'Cat??gorie',
		categories: 'Cat??gories',
		categoriesYouMightLike: 'Vous aimerez peut-??tre ces cat??gories',

		// POSTS
		post: 'Publication',
		search: 'Rechercher',
		nSearchResults: '{0} r??sultats pour votre recherche',
		title: 'Titre',
		description: 'Description',
		relatedPosts: 'Publications en relation',
		like: 'Coup de c??ur',
		share: 'Partager',
		report: 'Signaler',
		addToCollection: 'Add to Collection',

		// EVENTS
		event: '??v??nement',
		eventName: "Nom de l'??v??nement",
		location: 'Lieu',
		date: 'Date',
		selectImage: 'Choiir une image',
		inviteMembers: 'Inviter des mmbres',
		fromDateAtTime: 'Du {0} ?? {1}',
		toDateAtTime: 'Au {0} ?? {1}',
		participate: 'Participer',
		nParticipants: '{0} participants',

		// USERS
		follow: 'Suivre',
		followers: 'Followers',
		following: 'Membres suivis',
		about: '?? propos',
		posts: 'Publications',
		collections: 'Collections',

		// MESSAGING
		newMessage: 'Nouveau message',
		messages: 'Messages',
		messaging: 'Messagerie',
		send: 'Envoyer',

		// CREATE
		shareCreationsWithCommunity: 'Partagez vos cr??ations aupr??s de la communaut?? !',
		organizeExpoOrGatheringAndInviteUsers: 'Organisez une exposition ou un rassemblement et invitez des membres ?? y participer !',
		needToAccessDeviceStorage: "Nous avons besoin d'acc??der ?? la biblioth??que de votre appareil pour que vous puissiez ajouter des m??dias ?? votre publication.",
		content: 'Contenu',
		addMedia: 'Ajouter des m??dias',

		// MEDIA TYPES
		audio: 'Audio',
		image: 'Image',
		video: 'Vid??o',
	},
});

export default localizedStringsGlobal;
