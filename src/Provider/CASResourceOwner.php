<?php

namespace Zhaoweizhong\Auth\CAS\Provider;

use League\OAuth2\Client\Tool\ArrayAccessorTrait;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;


class CASResourceOwner implements ResourceOwnerInterface
{
    use ArrayAccessorTrait;

    /**
     * Domain
     *
     * @var string
     */
    protected $domain;

    /**
     * Raw response
     *
     * @var array
     */
    protected $response;

    /**
     * Creates new resource owner.
     *
     * @param array  $response
     */
    public function __construct(array $response = array())
    {
        $this->response = $response;
    }

    /**
     * Get resource owner id
     *
     * @return string|null
     */
    public function getId()
    {
        return null;
    }

    /**
     * Get resource owner email
     *
     * @return string|null
     */
    public function getEmail()
    {
        return null;
    }

    /**
     * Get resource owner name
     *
     * @return string|null
     */
    public function getName()
    {
        return null;
    }

    /**
     * Get resource owner nickname
     *
     * @return string|null
     */
    public function getNickname()
    {
        return null;
    }

    /**
     * Get resource owner url
     *
     * @return string|null
     */
    public function getUrl()
    {
        $urlParts = array_filter([$this->domain, $this->getNickname()]);

        return count($urlParts) ? implode('/', $urlParts) : null;
    }

    /**
     * Set resource owner domain
     *
     * @param  string $domain
     *
     * @return ResourceOwner
     */
    public function setDomain($domain)
    {
        $this->domain = $domain;

        return $this;
    }

    /**
     * Return all of the owner details available as an array.
     *
     * @return array
     */
    public function toArray()
    {
        return $this->response;
    }
}
