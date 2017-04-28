<?php
/*
 * This file is part of Flarum.
 *
 * (c) Toby Zerner <toby.zerner@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

    namespace Zhaoweizhong\Auth\CAS;

use Flarum\Forum\AuthenticationResponseFactory;
use Flarum\Forum\Controller\AbstractOAuth2Controller;
use Flarum\Settings\SettingsRepositoryInterface;
use Zhaoweizhong\Auth\CAS\Provider\CAS;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

class CASAuthController extends AbstractOAuth2Controller
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param AuthenticationResponseFactory $authResponse
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(AuthenticationResponseFactory $authResponse, SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
        $this->authResponse = $authResponse;
    }

    /**
     * {@inheritdoc}
     */
    protected function getProvider($redirectUri)
    {
        return new CAS([
            'clientId'     => $this->settings->get('zhaoweizhong-auth-cas.client_id'),
            'clientSecret' => $this->settings->get('zhaoweizhong-auth-cas.client_secret'),
            'redirectUri'  => $redirectUri
        ]);
    }

    /**
     * {@inheritdoc}
     */
    protected function getAuthorizationUrlOptions()
    {
        return ['scope' => []];
    }

    /**
     * {@inheritdoc}
     */
    protected function getIdentification(ResourceOwnerInterface $resourceOwner)
    {
        return [
            'email' => null ?: $this->getEmailFromApi()
        ];
    }

    /**
     * {@inheritdoc}
     */
    protected function getSuggestions(ResourceOwnerInterface $resourceOwner)
    {
        $url = $this->provider->domain.'/cas/oauth2.0/profile';

        $name = $this->provider->getResponse(
            $this->provider->getAuthenticatedRequest('GET', $url, $this->token)
        );

        return [
            'username' => $this->$name['attributes']['name'],
            'avatarUrl' => 'https://bbs.sustech.net/assets/avatars/default.jpg'
        ];
    }

    protected function getEmailFromApi()
    {
        $url = $this->provider->domain.'/cas/oauth2.0/profile';

        $email = $this->provider->getResponse(
            $this->provider->getAuthenticatedRequest('GET', $url, $this->token)
        );

            return $email['attributes']['email'];
    }
}
