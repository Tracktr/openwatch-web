// This file is auto-generated by @hey-api/openapi-ts

export const $GetMoviesDto = {
    type: 'object',
    properties: {
        movies: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number'
                    },
                    title: {
                        type: 'string'
                    },
                    releaseYear: {
                        type: 'number'
                    },
                    availability: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                streamingService: {
                                    type: 'object',
                                    properties: {
                                        id: {
                                            type: 'number'
                                        },
                                        name: {
                                            type: 'string'
                                        },
                                        logoUrl: {
                                            type: 'string'
                                        }
                                    },
                                    required: ['id', 'name', 'logoUrl']
                                }
                            },
                            required: ['streamingService']
                        }
                    }
                },
                required: ['id', 'title', 'releaseYear', 'availability']
            }
        }
    },
    required: ['movies']
} as const;

export const $MovieDto = {
    type: 'object',
    properties: {
        id: {
            type: 'number'
        },
        title: {
            type: 'string'
        },
        releaseYear: {
            type: 'number'
        },
        availability: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    streamingService: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'number'
                            },
                            name: {
                                type: 'string'
                            },
                            logoUrl: {
                                type: 'string'
                            }
                        },
                        required: ['id', 'name', 'logoUrl']
                    }
                },
                required: ['streamingService']
            }
        }
    },
    required: ['id', 'title', 'releaseYear', 'availability']
} as const;

export const $CreateMovieDto = {
    type: 'object',
    properties: {
        title: {
            type: 'string'
        },
        releaseYear: {
            type: 'number'
        },
        availability: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    streamingServiceId: {
                        type: 'number'
                    },
                    country: {
                        type: 'string'
                    }
                },
                required: ['streamingServiceId', 'country']
            }
        }
    },
    required: ['title', 'releaseYear', 'availability']
} as const;

export const $GetStreamingServicesDto = {
    type: 'object',
    properties: {
        streamingServices: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number'
                    },
                    name: {
                        type: 'string'
                    },
                    logoUrl: {
                        type: 'string'
                    },
                    availability: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                movie: {
                                    type: 'object',
                                    properties: {
                                        id: {
                                            type: 'number'
                                        },
                                        title: {
                                            type: 'string'
                                        },
                                        releaseYear: {
                                            type: 'number'
                                        }
                                    },
                                    required: ['id', 'title', 'releaseYear']
                                }
                            },
                            required: ['movie']
                        }
                    }
                },
                required: ['id', 'name', 'logoUrl', 'availability']
            }
        }
    },
    required: ['streamingServices']
} as const;

export const $StreamingServiceDto = {
    type: 'object',
    properties: {
        id: {
            type: 'number'
        },
        name: {
            type: 'string'
        },
        logoUrl: {
            type: 'string'
        },
        availability: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    movie: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'number'
                            },
                            title: {
                                type: 'string'
                            },
                            releaseYear: {
                                type: 'number'
                            }
                        },
                        required: ['id', 'title', 'releaseYear']
                    }
                },
                required: ['movie']
            }
        }
    },
    required: ['id', 'name', 'logoUrl', 'availability']
} as const;

export const $CreateStreamingServiceDto = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        logoUrl: {
            type: 'string'
        }
    },
    required: ['name', 'logoUrl']
} as const;

export const $CreateApplicationDto = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 1
        }
    },
    required: ['name']
} as const;

export const $ApplicationDto = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        apiKey: {
            type: 'object',
            properties: {
                key: {
                    type: 'string'
                }
            },
            required: ['key']
        }
    },
    required: ['id', 'name', 'apiKey']
} as const;

export const $GetApplicationsDto = {
    type: 'object',
    properties: {
        applications: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string'
                    },
                    name: {
                        type: 'string'
                    },
                    apiKey: {
                        type: 'object',
                        properties: {
                            key: {
                                type: 'string'
                            }
                        },
                        required: ['key']
                    }
                },
                required: ['id', 'name', 'apiKey']
            }
        }
    },
    required: ['applications']
} as const;