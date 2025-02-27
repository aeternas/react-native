/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import type {SchemaType} from '../../CodegenSchema.js';

const INTERFACE_ONLY: SchemaType = {
  modules: {
    Switch: {
      components: {
        InterfaceOnlyComponent: {
          interfaceOnly: true,
          isDeprecatedPaperComponentNameRCT: true,
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [
            {
              name: 'onChange',
              optional: true,
              bubblingType: 'bubble',
              typeAnnotation: {
                type: 'EventTypeAnnotation',
                argument: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      type: 'BooleanTypeAnnotation',
                      name: 'value',
                      optional: false,
                    },
                  ],
                },
              },
            },
          ],
          props: [
            {
              name: 'accessibilityHint',
              optional: true,
              typeAnnotation: {
                type: 'StringTypeAnnotation',
                default: '',
              },
            },
          ],
        },
      },
    },
  },
};

const BOOLEAN_PROP: SchemaType = {
  modules: {
    Switch: {
      components: {
        BooleanPropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: false,
              },
            },
          ],
        },
      },
    },
  },
};

const STRING_PROP: SchemaType = {
  modules: {
    Switch: {
      components: {
        StringPropComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'accessibilityHint',
              optional: true,
              typeAnnotation: {
                type: 'StringTypeAnnotation',
                default: '',
              },
            },
            {
              name: 'accessibilityRole',
              optional: true,
              typeAnnotation: {
                type: 'StringTypeAnnotation',
                default: null,
              },
            },
          ],
        },
      },
    },
  },
};

const INTEGER_PROPS: SchemaType = {
  modules: {
    Switch: {
      components: {
        IntegerPropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'progress1',
              optional: true,
              typeAnnotation: {
                type: 'Int32TypeAnnotation',
                default: 0,
              },
            },
            {
              name: 'progress2',
              optional: true,
              typeAnnotation: {
                type: 'Int32TypeAnnotation',
                default: -1,
              },
            },
            {
              name: 'progress3',
              optional: true,
              typeAnnotation: {
                type: 'Int32TypeAnnotation',
                default: 10,
              },
            },
          ],
        },
      },
    },
  },
};

const FLOAT_PROPS: SchemaType = {
  modules: {
    Switch: {
      components: {
        FloatPropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'blurRadius',
              optional: true,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: 0.0,
              },
            },
            {
              name: 'blurRadius2',
              optional: true,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: 0.001,
              },
            },
            {
              name: 'blurRadius3',
              optional: true,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: 2.1,
              },
            },
            {
              name: 'blurRadius4',
              optional: true,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: 0,
              },
            },
            {
              name: 'blurRadius5',
              optional: true,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: 1,
              },
            },
            {
              name: 'blurRadius6',
              optional: true,
              typeAnnotation: {
                type: 'FloatTypeAnnotation',
                default: -0.0,
              },
            },
          ],
        },
      },
    },
  },
};

const COLOR_PROP: SchemaType = {
  modules: {
    Switch: {
      components: {
        ColorPropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'tintColor',
              optional: true,
              typeAnnotation: {
                type: 'NativePrimitiveTypeAnnotation',
                name: 'ColorPrimitive',
              },
            },
          ],
        },
      },
    },
  },
};

const IMAGE_PROP: SchemaType = {
  modules: {
    Slider: {
      components: {
        ImagePropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'thumbImage',
              optional: true,
              typeAnnotation: {
                type: 'NativePrimitiveTypeAnnotation',
                name: 'ImageSourcePrimitive',
              },
            },
          ],
        },
      },
    },
  },
};

const POINT_PROP: SchemaType = {
  modules: {
    Switch: {
      components: {
        PointPropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'startPoint',
              optional: true,
              typeAnnotation: {
                type: 'NativePrimitiveTypeAnnotation',
                name: 'PointPrimitive',
              },
            },
          ],
        },
      },
    },
  },
};

const ARRAY_PROPS: SchemaType = {
  modules: {
    Slider: {
      components: {
        ArrayPropsNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'names',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'StringTypeAnnotation',
                },
              },
            },
            {
              name: 'disableds',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'BooleanTypeAnnotation',
                },
              },
            },
            {
              name: 'progress',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'Int32TypeAnnotation',
                },
              },
            },
            {
              name: 'radii',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'FloatTypeAnnotation',
                },
              },
            },
            {
              name: 'colors',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'NativePrimitiveTypeAnnotation',
                  name: 'ColorPrimitive',
                },
              },
            },
            {
              name: 'srcs',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'NativePrimitiveTypeAnnotation',
                  name: 'ImageSourcePrimitive',
                },
              },
            },
            {
              name: 'points',
              optional: true,
              typeAnnotation: {
                type: 'ArrayTypeAnnotation',
                elementType: {
                  type: 'NativePrimitiveTypeAnnotation',
                  name: 'PointPrimitive',
                },
              },
            },
          ],
        },
      },
    },
  },
};

const MULTI_NATIVE_PROP: SchemaType = {
  modules: {
    Slider: {
      components: {
        ImageColorPropNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'thumbImage',
              optional: true,
              typeAnnotation: {
                type: 'NativePrimitiveTypeAnnotation',
                name: 'ImageSourcePrimitive',
              },
            },
            {
              name: 'color',
              optional: true,
              typeAnnotation: {
                type: 'NativePrimitiveTypeAnnotation',
                name: 'ColorPrimitive',
              },
            },
            {
              name: 'thumbTintColor',
              optional: true,
              typeAnnotation: {
                type: 'NativePrimitiveTypeAnnotation',
                name: 'ColorPrimitive',
              },
            },
            {
              name: 'point',
              optional: true,
              typeAnnotation: {
                type: 'NativePrimitiveTypeAnnotation',
                name: 'PointPrimitive',
              },
            },
          ],
        },
      },
    },
  },
};

const ENUM_PROP: SchemaType = {
  modules: {
    Switch: {
      components: {
        EnumPropsNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'alignment',
              optional: true,
              typeAnnotation: {
                type: 'StringEnumTypeAnnotation',
                default: 'center',
                options: [
                  {
                    name: 'top',
                  },
                  {
                    name: 'center',
                  },
                  {
                    name: 'bottom-right',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
};

const EVENT_PROPS: SchemaType = {
  modules: {
    Switch: {
      components: {
        EventsNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [
            {
              name: 'onChange',
              optional: true,
              bubblingType: 'bubble',
              typeAnnotation: {
                type: 'EventTypeAnnotation',
                argument: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      type: 'BooleanTypeAnnotation',
                      name: 'value',
                      optional: false,
                    },
                    {
                      type: 'StringTypeAnnotation',
                      name: 'source',
                      optional: true,
                    },
                    {
                      type: 'Int32TypeAnnotation',
                      name: 'progress',
                      optional: true,
                    },
                    {
                      type: 'FloatTypeAnnotation',
                      name: 'scale',
                      optional: true,
                    },
                  ],
                },
              },
            },
            {
              name: 'onEventDirect',
              optional: true,
              bubblingType: 'direct',
              typeAnnotation: {
                type: 'EventTypeAnnotation',
                argument: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      type: 'BooleanTypeAnnotation',
                      name: 'value',
                      optional: false,
                    },
                  ],
                },
              },
            },
            {
              name: 'onEnd',
              optional: true,
              bubblingType: 'bubble',
              typeAnnotation: {
                type: 'EventTypeAnnotation',
              },
            },
          ],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: false,
              },
            },
          ],
        },
      },
    },
  },
};

const EVENT_NESTED_OBJECT_PROPS: SchemaType = {
  modules: {
    Switch: {
      components: {
        EventsNestedObjectNativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [
            {
              name: 'onChange',
              optional: true,
              bubblingType: 'bubble',
              typeAnnotation: {
                type: 'EventTypeAnnotation',
                argument: {
                  type: 'ObjectTypeAnnotation',
                  properties: [
                    {
                      type: 'ObjectTypeAnnotation',
                      name: 'location',
                      optional: false,
                      properties: [
                        {
                          type: 'ObjectTypeAnnotation',
                          name: 'source',
                          optional: false,
                          properties: [
                            {
                              type: 'StringTypeAnnotation',
                              name: 'url',
                              optional: false,
                            },
                          ],
                        },
                        {
                          type: 'Int32TypeAnnotation',
                          name: 'x',
                          optional: false,
                        },
                        {
                          type: 'Int32TypeAnnotation',
                          name: 'y',
                          optional: false,
                        },
                      ],
                    },
                  ],
                },
              },
            },
          ],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: false,
              },
            },
          ],
        },
      },
    },
  },
};

const TWO_COMPONENTS_SAME_FILE: SchemaType = {
  modules: {
    MyComponents: {
      components: {
        MultiComponent1NativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: false,
              },
            },
          ],
        },

        MultiComponent2NativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: true,
              },
            },
          ],
        },
      },
    },
  },
};

const TWO_COMPONENTS_DIFFERENT_FILES: SchemaType = {
  modules: {
    ComponentFile1: {
      components: {
        MultiFile1NativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: false,
              },
            },
          ],
        },
      },
    },

    ComponentFile2: {
      components: {
        MultiFile2NativeComponent: {
          extendsProps: [
            {
              type: 'ReactNativeBuiltInType',
              knownTypeName: 'ReactNativeCoreViewProps',
            },
          ],
          events: [],
          props: [
            {
              name: 'disabled',
              optional: true,
              typeAnnotation: {
                type: 'BooleanTypeAnnotation',
                default: true,
              },
            },
          ],
        },
      },
    },
  },
};

module.exports = {
  INTERFACE_ONLY,
  BOOLEAN_PROP,
  STRING_PROP,
  INTEGER_PROPS,
  FLOAT_PROPS,
  COLOR_PROP,
  IMAGE_PROP,
  POINT_PROP,
  ARRAY_PROPS,
  MULTI_NATIVE_PROP,
  ENUM_PROP,
  EVENT_PROPS,
  EVENT_NESTED_OBJECT_PROPS,
  TWO_COMPONENTS_SAME_FILE,
  TWO_COMPONENTS_DIFFERENT_FILES,
};
