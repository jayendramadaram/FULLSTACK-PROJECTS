'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crudapp documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-a4898482f05feaa56b36f1a470042bc06aed4defcdaeb42116e6f2414e38190ecaaac4347dfabe7bed28b445cf02a9dfb99383ce99c6c73812af85b82544ffa2"' : 'data-target="#xs-injectables-links-module-AppModule-a4898482f05feaa56b36f1a470042bc06aed4defcdaeb42116e6f2414e38190ecaaac4347dfabe7bed28b445cf02a9dfb99383ce99c6c73812af85b82544ffa2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a4898482f05feaa56b36f1a470042bc06aed4defcdaeb42116e6f2414e38190ecaaac4347dfabe7bed28b445cf02a9dfb99383ce99c6c73812af85b82544ffa2"' :
                                        'id="xs-injectables-links-module-AppModule-a4898482f05feaa56b36f1a470042bc06aed4defcdaeb42116e6f2414e38190ecaaac4347dfabe7bed28b445cf02a9dfb99383ce99c6c73812af85b82544ffa2"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-583896e8cac9ceba33bf081744b4f9c78cb54649d91dbd265380c5f7b6ab7a0ec9ad503d77e621a341c57373f1d6403f2619f665d30a869d80cf0dc61cd772b5"' : 'data-target="#xs-controllers-links-module-AuthModule-583896e8cac9ceba33bf081744b4f9c78cb54649d91dbd265380c5f7b6ab7a0ec9ad503d77e621a341c57373f1d6403f2619f665d30a869d80cf0dc61cd772b5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-583896e8cac9ceba33bf081744b4f9c78cb54649d91dbd265380c5f7b6ab7a0ec9ad503d77e621a341c57373f1d6403f2619f665d30a869d80cf0dc61cd772b5"' :
                                            'id="xs-controllers-links-module-AuthModule-583896e8cac9ceba33bf081744b4f9c78cb54649d91dbd265380c5f7b6ab7a0ec9ad503d77e621a341c57373f1d6403f2619f665d30a869d80cf0dc61cd772b5"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-583896e8cac9ceba33bf081744b4f9c78cb54649d91dbd265380c5f7b6ab7a0ec9ad503d77e621a341c57373f1d6403f2619f665d30a869d80cf0dc61cd772b5"' : 'data-target="#xs-injectables-links-module-AuthModule-583896e8cac9ceba33bf081744b4f9c78cb54649d91dbd265380c5f7b6ab7a0ec9ad503d77e621a341c57373f1d6403f2619f665d30a869d80cf0dc61cd772b5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-583896e8cac9ceba33bf081744b4f9c78cb54649d91dbd265380c5f7b6ab7a0ec9ad503d77e621a341c57373f1d6403f2619f665d30a869d80cf0dc61cd772b5"' :
                                        'id="xs-injectables-links-module-AuthModule-583896e8cac9ceba33bf081744b4f9c78cb54649d91dbd265380c5f7b6ab7a0ec9ad503d77e621a341c57373f1d6403f2619f665d30a869d80cf0dc61cd772b5"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MailModule-d72b30e0b6f2849861f35977ea10aa54b7415a423cd7f0887b5ae4f2bea24dc54d68518d52406884d18db7b12994ac37dc42517b0cabc004bb3ada9c83bb1c19"' : 'data-target="#xs-injectables-links-module-MailModule-d72b30e0b6f2849861f35977ea10aa54b7415a423cd7f0887b5ae4f2bea24dc54d68518d52406884d18db7b12994ac37dc42517b0cabc004bb3ada9c83bb1c19"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-d72b30e0b6f2849861f35977ea10aa54b7415a423cd7f0887b5ae4f2bea24dc54d68518d52406884d18db7b12994ac37dc42517b0cabc004bb3ada9c83bb1c19"' :
                                        'id="xs-injectables-links-module-MailModule-d72b30e0b6f2849861f35977ea10aa54b7415a423cd7f0887b5ae4f2bea24dc54d68518d52406884d18db7b12994ac37dc42517b0cabc004bb3ada9c83bb1c19"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-1052a306a3ff1600fe2c08286c345e4adcfce9677257a22a5565ab491aae1024597ac226b4b18394a5c1b55da6d4f7541359cfbd3df9df41ccbb6d1a269ea1b7"' : 'data-target="#xs-injectables-links-module-PrismaModule-1052a306a3ff1600fe2c08286c345e4adcfce9677257a22a5565ab491aae1024597ac226b4b18394a5c1b55da6d4f7541359cfbd3df9df41ccbb6d1a269ea1b7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-1052a306a3ff1600fe2c08286c345e4adcfce9677257a22a5565ab491aae1024597ac226b4b18394a5c1b55da6d4f7541359cfbd3df9df41ccbb6d1a269ea1b7"' :
                                        'id="xs-injectables-links-module-PrismaModule-1052a306a3ff1600fe2c08286c345e4adcfce9677257a22a5565ab491aae1024597ac226b4b18394a5c1b55da6d4f7541359cfbd3df9df41ccbb6d1a269ea1b7"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SavedPostModule.html" data-type="entity-link" >SavedPostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-SavedPostModule-1062904f431ff453a391f24507fcc41bb1953a5dc411a4412f1b8bc52c799cd67fba122f5f25c91c66d9fa2576c9fc9711c00df159fdb62370cad99fbedeceb9"' : 'data-target="#xs-controllers-links-module-SavedPostModule-1062904f431ff453a391f24507fcc41bb1953a5dc411a4412f1b8bc52c799cd67fba122f5f25c91c66d9fa2576c9fc9711c00df159fdb62370cad99fbedeceb9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SavedPostModule-1062904f431ff453a391f24507fcc41bb1953a5dc411a4412f1b8bc52c799cd67fba122f5f25c91c66d9fa2576c9fc9711c00df159fdb62370cad99fbedeceb9"' :
                                            'id="xs-controllers-links-module-SavedPostModule-1062904f431ff453a391f24507fcc41bb1953a5dc411a4412f1b8bc52c799cd67fba122f5f25c91c66d9fa2576c9fc9711c00df159fdb62370cad99fbedeceb9"' }>
                                            <li class="link">
                                                <a href="controllers/SavedPostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SavedPostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SavedPostModule-1062904f431ff453a391f24507fcc41bb1953a5dc411a4412f1b8bc52c799cd67fba122f5f25c91c66d9fa2576c9fc9711c00df159fdb62370cad99fbedeceb9"' : 'data-target="#xs-injectables-links-module-SavedPostModule-1062904f431ff453a391f24507fcc41bb1953a5dc411a4412f1b8bc52c799cd67fba122f5f25c91c66d9fa2576c9fc9711c00df159fdb62370cad99fbedeceb9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SavedPostModule-1062904f431ff453a391f24507fcc41bb1953a5dc411a4412f1b8bc52c799cd67fba122f5f25c91c66d9fa2576c9fc9711c00df159fdb62370cad99fbedeceb9"' :
                                        'id="xs-injectables-links-module-SavedPostModule-1062904f431ff453a391f24507fcc41bb1953a5dc411a4412f1b8bc52c799cd67fba122f5f25c91c66d9fa2576c9fc9711c00df159fdb62370cad99fbedeceb9"' }>
                                        <li class="link">
                                            <a href="injectables/SavedPostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SavedPostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-672fcd5ca38be5aa84978e87050b297b9e78e16c44aca8bf3e3b7090aa6549a1fc81861a77a564c2f1f65310faed6e9705e79dcff7f106c236fb5884d73177aa"' : 'data-target="#xs-controllers-links-module-UserModule-672fcd5ca38be5aa84978e87050b297b9e78e16c44aca8bf3e3b7090aa6549a1fc81861a77a564c2f1f65310faed6e9705e79dcff7f106c236fb5884d73177aa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-672fcd5ca38be5aa84978e87050b297b9e78e16c44aca8bf3e3b7090aa6549a1fc81861a77a564c2f1f65310faed6e9705e79dcff7f106c236fb5884d73177aa"' :
                                            'id="xs-controllers-links-module-UserModule-672fcd5ca38be5aa84978e87050b297b9e78e16c44aca8bf3e3b7090aa6549a1fc81861a77a564c2f1f65310faed6e9705e79dcff7f106c236fb5884d73177aa"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-672fcd5ca38be5aa84978e87050b297b9e78e16c44aca8bf3e3b7090aa6549a1fc81861a77a564c2f1f65310faed6e9705e79dcff7f106c236fb5884d73177aa"' : 'data-target="#xs-injectables-links-module-UserModule-672fcd5ca38be5aa84978e87050b297b9e78e16c44aca8bf3e3b7090aa6549a1fc81861a77a564c2f1f65310faed6e9705e79dcff7f106c236fb5884d73177aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-672fcd5ca38be5aa84978e87050b297b9e78e16c44aca8bf3e3b7090aa6549a1fc81861a77a564c2f1f65310faed6e9705e79dcff7f106c236fb5884d73177aa"' :
                                        'id="xs-injectables-links-module-UserModule-672fcd5ca38be5aa84978e87050b297b9e78e16c44aca8bf3e3b7090aa6549a1fc81861a77a564c2f1f65310faed6e9705e79dcff7f106c236fb5884d73177aa"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SavedPostController.html" data-type="entity-link" >SavedPostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthLogin.html" data-type="entity-link" >AuthLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthSignup.html" data-type="entity-link" >AuthSignup</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookmarkDto.html" data-type="entity-link" >CreateBookmarkDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EditUser.html" data-type="entity-link" >EditUser</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LogRequest.html" data-type="entity-link" >LogRequest</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SavedPostService.html" data-type="entity-link" >SavedPostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});