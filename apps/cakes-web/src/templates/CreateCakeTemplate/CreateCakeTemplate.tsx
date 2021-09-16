import { Formik, Form, Field, FormikProps, FieldProps } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Center,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
} from '@waracle-test/web-component-library';
import { PageWithHeader } from '../PageWithHeader/PageWithHeader';
import { Cake } from '@waracle-test/models';

interface Props {
  onSubmit: (values: Omit<Cake, 'id'>) => void;
}

const createCakeSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Too short')
    .max(30, 'Too Long')
    .required('Required'),
  comment: Yup.string()
    .min(1, 'Too short')
    .max(200, 'Too Long')
    .required('Required'),
  imageUrl: Yup.string().url().required('Required'),
  yumFactor: Yup.number()
    .min(1, 'Too low')
    .max(5, 'Too high')
    .required('Required'),
});

export const CreateCakeTemplate: React.FC<Props> = ({ onSubmit }) => {
  const intialValues: Omit<Cake, 'id'> = {
    name: '',
    comment: '',
    imageUrl: '',
    yumFactor: 3,
  };

  return (
    <PageWithHeader headerText="Create a Cake">
      <Center>
        <Box p="6">
          <Formik
            initialValues={intialValues}
            onSubmit={(values, actions) => {
              onSubmit(values);
              actions.setSubmitting(false);
            }}
            validationSchema={createCakeSchema}
          >
            {(props) => (
              <Form>
                <Field name="name">
                  {({ field, form }: FieldProps) => (
                    <FormControl
                      isInvalid={!!form.errors.name && !!form.touched.name}
                    >
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input
                        {...field}
                        id="name"
                        placeholder="name"
                        bg="white"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="comment">
                  {({ field, form }: FieldProps) => (
                    <FormControl
                      isInvalid={
                        !!form.errors.comment && !!form.touched.comment
                      }
                    >
                      <FormLabel htmlFor="comment">Comment</FormLabel>
                      <Textarea
                        {...field}
                        id="comment"
                        placeholder="comment"
                        bg="white"
                      />
                      <FormErrorMessage>{form.errors.comment}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="imageUrl">
                  {({ field, form }: FieldProps) => (
                    <FormControl
                      isInvalid={
                        !!form.errors.imageUrl && !!form.touched.imageUrl
                      }
                    >
                      <FormLabel htmlFor="imageUrl">imageUrl</FormLabel>
                      <Input
                        {...field}
                        id="imageUrl"
                        placeholder="imageUrl"
                        bg="white"
                      />
                      <FormErrorMessage>
                        {form.errors.imageUrl}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="yumFactor">
                  {({ field, form }: FieldProps) => (
                    <FormControl
                      isInvalid={
                        !!form.errors.yumFactor && !!form.touched.yumFactor
                      }
                    >
                      <FormLabel htmlFor="yumFactor">yumFactor</FormLabel>
                      <NumberInput
                        min={1}
                        max={5}
                        // work around for bug with Formik and Steppers
                        onChange={(val) => form.setFieldValue(field.name, val)}
                        bg="white"
                      >
                        <NumberInputField {...field} id="yumFactor" />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                      <FormErrorMessage>
                        {form.errors.yumFactor}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Box pt="3">
                  <Button isLoading={props.isSubmitting} type="submit">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Center>
    </PageWithHeader>
  );
};
