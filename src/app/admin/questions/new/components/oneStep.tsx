import { Questionnaire } from "@/types/questionnaire";
import { useEffect, useRef, useState } from "react";
import { object, string, date, ValidationError } from "yup";
import { motion, Variants, AnimatePresence } from "framer-motion";
import useStep from "@/components/common/Step/hooks/useStep";

const ErrorValidatioNForm: Variants = {
  hidden: {
    scaleY: 0,
    transformOrigin: "top",
  },
  visible: {
    scaleY: 1,
  },
  exit: {
    scaleY: 0,
  },
};

interface OneStepProps {
  handleChange: ({
    title,
    startDate,
    endDate,
  }: {
    title: string;
    startDate: Date;
    endDate: Date;
  }) => void;
}

const newQuestionnaireSchema = object().shape({
  title: string()
    .required("El título es requerido")
    .min(5, "El título debe tener al menos 5 caracteres"),
  startDate: date().required("La fecha de inicio es requerida"),
  endDate: date()
    .required("La fecha de finalización es requerida")
    .test(
      "is-greater-than-start",
      "La fecha de finalización no puede ser menor que la fecha de inicio",
      function (endDate, context) {
        const { startDate } = context.parent; // Obtenemos el valor de startDate
        return startDate <= endDate; // Comparamos las fechas
      }
    ),
});

const OneStep = ({ handleChange }: OneStepProps) => {
  const [title, setTitle] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [error, setError] = useState<string>("");
  const errorRef = useRef<HTMLDivElement>(null);

  const { next: nextStep } = useStep();

  useEffect(() => {
    const timeId = setTimeout(() => {
      setError("");
    }, 3000);
    return () => clearTimeout(timeId);
  }, [error]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validation = newQuestionnaireSchema.validateSync(
        {
          title,
          startDate,
          endDate,
        },
        {
          abortEarly: false,
        }
      );
      handleChange({
        title,
        startDate: validation.startDate,
        endDate: validation.endDate,
      });
      nextStep();
    } catch (e: ValidationError | any | unknown) {
      if (e instanceof ValidationError) {
        setError(e.errors.join(", ").trim());
      }
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-[600px] px-6 py-10 rounded-lg border-blue-600 border bg-blue-600 bg-opacity-5">
      <h1 className="text-center text-blue-600 font-bold text-xl font-gordita-bold">
        Detalles del cuestionario
      </h1>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="title"
            className="font-inter-regular select-none w-fit"
          >
            Título
          </label>
          <input
            name="title"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-300 rounded-lg h-10 px-4 font-gordita-regular focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <label
              htmlFor="startDate"
              className="font-inter-regular select-none w-fit"
            >
              Fecha Inicial
            </label>
            <input
              name="title"
              type="datetime-local"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-gray-300 rounded-lg h-10 px-4 font-gordita-regular focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="endDate"
              className="font-inter-regular select-none w-fit"
            >
              Fecha Final
            </label>
            <input
              name="title"
              type="datetime-local"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-gray-300 rounded-lg h-10 px-4 font-gordita-regular focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>
        <AnimatePresence>
          {error && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              ref={errorRef}
              variants={ErrorValidatioNForm}
              className="bg-red-600 text-white rounded-lg px-4 font-gordita- py-4"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex justify-center pt-8">
          <button className="bg-blue-600 text-white rounded-lg h-10 px-4 font-gordita-regular focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent active:scale-110 transition-transform duration-300">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
};

export default OneStep;
