import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'

interface user {
	usermail: string,
	uid: string
}

@Injectable()
export class UserService {
	private user: user

	constructor(private afAuth: AngularFireAuth) {

	}

	setUser(user: user) {
		this.user = user
	}

	getusermail(): string {
		return this.user.usermail
	}

	reAuth(usermail: string, password: string) {
		return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(usermail + '@codedamn.com', password))
	}

	updatePassword(newpassword: string) {
		return this.afAuth.auth.currentUser.updatePassword(newpassword)
	}

	updateEmail(newemail: string) {
		return this.afAuth.auth.currentUser.updateEmail(newemail + '@codedamn.com')
	}

	async isAuthenticated() {
		if(this.user) return true

		const user = await this.afAuth.authState.pipe(first()).toPromise()

		if(user) {
			this.setUser({
				usermail: user.email,
				uid: user.uid
			})

			return true
		}
		return false
	}

	getUID(): string {
		return this.user.uid
	}
}

/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
}*/
