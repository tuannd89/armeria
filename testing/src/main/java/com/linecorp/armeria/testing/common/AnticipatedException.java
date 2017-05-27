/*
 * Copyright 2017 LINE Corporation
 *
 * LINE Corporation licenses this file to you under the Apache License,
 * version 2.0 (the "License"); you may not use this file except in compliance
 * with the License. You may obtain a copy of the License at:
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

package com.linecorp.armeria.testing.common;

/**
 * A {@link RuntimeException} which is expected to be raised during a test.
 */
public class AnticipatedException extends RuntimeException {

    private static final long serialVersionUID = -3303479723421632825L;

    /**
     * Creates a new instance.
     */
    public AnticipatedException() {}

    /**
     * Creates a new instance.
     */
    public AnticipatedException(String message) {
        super(message);
    }

    /**
     * Creates a new instance.
     */
    public AnticipatedException(String message, Throwable cause) {
        super(message, cause);
    }

    /**
     * Creates a new instance.
     */
    public AnticipatedException(Throwable cause) {
        super(cause);
    }

    /**
     * Creates a new instance.
     */
    protected AnticipatedException(String message, Throwable cause, boolean enableSuppression,
                                   boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
